import fs from 'fs';
import path from 'path';
import https from 'https';

const targetFile = path.resolve('src/data/catalogData.ts');
const imageDir = path.resolve('public/images/subcategories');

if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
}

let content = fs.readFileSync(targetFile, 'utf8');

// Regex to find all name and image pairs inside subcategories
const regex = /name:\s*'([^']+)',[\s\S]*?image:\s*'([^']+)'/g;

async function downloadImage(url, filename) {
    if (url.startsWith('/')) {
        console.log(`Skipping local image: ${url}`);
        return null; // Already local
    }
    const filepath = path.join(imageDir, filename);
    if (fs.existsSync(filepath)) {
        console.log(`Image already exists: ${filename}`);
        return `/images/subcategories/${filename}`;
    }

    // Delay to avoid hitting rate limits too hard
    await new Promise(r => setTimeout(r, 500));

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filepath);
        https.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        }, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                // follow redirect
                https.get(response.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res2) => {
                    res2.pipe(file);
                    file.on('finish', () => { file.close(); resolve(`/images/subcategories/${filename}`); });
                }).on('error', (err) => { fs.unlink(filepath, () => {}); reject(err); });
            } else if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve(`/images/subcategories/${filename}`);
                });
            } else {
                reject(new Error(`Server responded with ${response.statusCode}: ${response.statusMessage}`));
            }
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            reject(err);
        });
    });
}

async function processImages() {
    let match;
    const matches = [];
    while ((match = regex.exec(content)) !== null) {
        matches.push({
            name: match[1],
            originalUrl: match[2],
            index: match.index
        });
    }

    let modifiedContent = content;
    console.log(`Found ${matches.length} images to download...`);

    for (const item of matches) {
        if (!item.originalUrl.includes('pollinations.ai') && !item.originalUrl.includes('unsplash.com')) {
            continue; // Keep existing local paths
        }
        
        const safeName = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const ext = item.originalUrl.includes('unsplash') ? '.jpg' : '.jpg';
        const filename = `${safeName}${ext}`;
        
        try {
            console.log(`Downloading for ${item.name}...`);
            const localPath = await downloadImage(item.originalUrl, filename);
            if (localPath) {
                // Ensure we only replace the specific URL to avoid accidental overrides of similar URLs
                modifiedContent = modifiedContent.replace(`image: '${item.originalUrl}'`, `image: '${localPath}'`);
                console.log(`Success: ${item.name} -> ${localPath}`);
            }
        } catch (error) {
            console.error(`Failed to download for ${item.name}:`, error.message);
        }
    }

    fs.writeFileSync(targetFile, modifiedContent, 'utf8');
    console.log('Finished updating catalogData.ts');
}

processImages();
