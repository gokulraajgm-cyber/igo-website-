import fs from 'fs';
import path from 'path';
import https from 'https';

const targetFile = path.resolve('src/data/catalogData.ts');
const imageDir = path.resolve('public/images/subcategories');

if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
}

let content = fs.readFileSync(targetFile, 'utf8');
const regex = /name:\s*'([^']+)',[\s\S]*?image:\s*'([^']+)'/g;

const fallbackImages = [
    'https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1628102491629-77858ab572cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1530836369250-ef71a3f5e481?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1592982537447-6f2aa6c8b935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1584351583369-6baf055b51a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504932029676-47b2ae60b943?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1524704796725-9fc3044a58b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1548550023-2bc3dcd69fb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
];

async function downloadFallbackImage(index, filename) {
    const fallbackUrl = fallbackImages[index % fallbackImages.length];
    return new Promise((resolve, reject) => {
        const filepath = path.join(imageDir, filename);
        if (fs.existsSync(filepath)) resolve(`/images/subcategories/${filename}`);
        else {
            const file = fs.createWriteStream(filepath);
            https.get(fallbackUrl, (res) => {
                res.pipe(file);
                file.on('finish', () => { file.close(); resolve(`/images/subcategories/${filename}`); });
            }).on('error', reject);
        }
    });
}

function fetchWithTimeout(url, filename, timeoutMs) {
    return new Promise((resolve, reject) => {
        const filepath = path.join(imageDir, filename);
        const file = fs.createWriteStream(filepath);
        let completed = false;
        
        const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                https.get(response.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res2) => {
                    res2.pipe(file);
                    file.on('finish', () => { completed = true; file.close(); resolve(`/images/subcategories/${filename}`); });
                }).on('error', reject);
            } else if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => { completed = true; file.close(); resolve(`/images/subcategories/${filename}`); });
            } else reject(new Error(`Status ${response.statusCode}`));
        }).on('error', reject);

        req.setTimeout(timeoutMs, () => {
            if (!completed) {
                req.abort();
                fs.unlink(filepath, () => {});
                reject(new Error('Timeout'));
            }
        });
    });
}

async function processImages() {
    let match;
    const matches = [];
    while ((match = regex.exec(content)) !== null) {
        matches.push({ name: match[1], originalUrl: match[2] });
    }

    let modifiedContent = content;
    console.log(`Found ${matches.length} images to download...`);

    for (let i = 0; i < matches.length; i++) {
        const item = matches[i];
        if (item.originalUrl.startsWith('/')) continue;
        
        const safeName = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const filename = `${safeName}.jpg`;
        const filepath = path.join(imageDir, filename);
        
        if (fs.existsSync(filepath)) {
            // Already fully downloaded
            modifiedContent = modifiedContent.replace(`image: '${item.originalUrl}'`, `image: '/images/subcategories/${filename}'`);
            continue;
        }

        try {
            console.log(`Downloading (10s limit) ${item.name}...`);
            await fetchWithTimeout(item.originalUrl, filename, 10000);
            modifiedContent = modifiedContent.replace(`image: '${item.originalUrl}'`, `image: '/images/subcategories/${filename}'`);
            console.log(`Success: ${item.name}`);
        } catch (error) {
            console.log(`Failed ${item.name}: ${error.message}, using fallback...`);
            await downloadFallbackImage(i, filename);
            modifiedContent = modifiedContent.replace(`image: '${item.originalUrl}'`, `image: '/images/subcategories/${filename}'`);
        }
    }

    fs.writeFileSync(targetFile, modifiedContent, 'utf8');
    console.log('Finished updating catalogData.ts');
}

processImages();
