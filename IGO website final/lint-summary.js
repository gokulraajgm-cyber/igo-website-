const fs = require("fs");
const { execSync } = require("child_process");

try {
  execSync("npx eslint . --format json > eslint-report.json", { stdio: "ignore" });
} catch (e) {
  // eslint throws an error if it finds lint issues, which is expected
}

try {
  const fileContent = fs.readFileSync("eslint-report.json", "utf16le"); // PowerShell redirect creates utf16le by default!
  const jsonContent = fileContent.startsWith("{") || fileContent.startsWith("[") ? fileContent : fs.readFileSync("eslint-report.json", "utf8");
  const report = JSON.parse(jsonContent);

  report.forEach(file => {
    if (file.messages.length > 0) {
      console.log(file.filePath.replace(process.cwd(), ""));
      file.messages.forEach(msg => {
        const severity = msg.severity === 2 ? "error" : "warn";
        console.log(`  ${msg.line}:${msg.column}  ${severity}  ${msg.message}  ${msg.ruleId}`);
      });
      console.log();
    }
  });
} catch (e) {
  console.log("Failed to parse", e);
}
