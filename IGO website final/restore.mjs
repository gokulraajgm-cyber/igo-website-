import fs from 'fs';
import path from 'path';

function restoreFromDump() {
  const dumpPath = path.resolve('llm_feed_data.md');
  if (!fs.existsSync(dumpPath)) {
    console.error('llm_feed_data.md not found!');
    return;
  }

  const content = fs.readFileSync(dumpPath, 'utf-8');
  
  // Regex to match file blocks
  // ### File: `filepath`
  // ```lang
  // content
  // ```
  const fileRegex = /### File: `([^`]+)`[\s\n]*```[a-z]*\n([\s\S]*?)\n```/g;
  
  let match;
  let count = 0;
  
  while ((match = fileRegex.exec(content)) !== null) {
    const filePath = match[1];
    const fileContent = match[2];
    
    // Only restore src and public files, plus root config files if needed.
    // To be safe, restore all files from the dump.
    const fullPath = path.resolve(filePath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(fullPath, fileContent, 'utf-8');
    console.log(`Restored: ${filePath}`);
    count++;
  }
  
  console.log(`Successfully restored ${count} files from dump.`);
}

restoreFromDump();
