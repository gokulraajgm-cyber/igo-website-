import fs from 'fs';
import path from 'path';
import https from 'https';

const imageDir = path.resolve('public/images');

if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
}

const imagesToDownload = [
    { url: 'https://www.igoagritechfarms.com/images/w1.jpg', filename: 'w1.jpg' },
    { url: 'https://www.igoagritechfarms.com/images/w2.jpg', filename: 'w2.jpg' },
    { url: 'https://www.igoagritechfarms.com/images/w3.jpg', filename: 'w3.jpg' },
    { url: 'https://www.igoagritechfarms.com/images/logo.png', filename: 'logo.png' },
    { url: 'https://www.igoagritechfarms.com/images/popup.jpeg', filename: 'popup.jpeg' },
    { url: 'https://www.igoagritechfarms.com/images/foot1.png', filename: 'foot1.png' },
    { url: 'https://www.igoagritechfarms.com/images/foot2.png', filename: 'foot2.png' },
    { url: 'https://www.igoagritechfarms.com/images/foot3.png', filename: 'foot3.png' },
    { url: 'https://www.igoagritechfarms.com/images/foot4.png', filename: 'foot4.png' },
    { url: 'https://www.igoagritechfarms.com/images/foot5.png', filename: 'foot5.png' },
    { url: 'https://www.igoagritechfarms.com/images/about.webp', filename: 'about.webp' },
    { url: 'https://www.igoagritechfarms.com/images/x1.png', filename: 'x1.png' }
];

async function downloadImage(url, filename) {
    return new Promise((resolve, reject) => {
        const filepath = path.join(imageDir, filename);
        const file = fs.createWriteStream(filepath);
        
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    console.log(`Downloaded: ${filename}`);
                    resolve();
                });
            } else {
                reject(new Error(`Failed to download ${filename}: Status ${response.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlink(filepath, () => {});
            reject(err);
        });
    });
}

async function main() {
    console.log('Starting downloads...');
    for (const img of imagesToDownload) {
        try {
            await downloadImage(img.url, img.filename);
        } catch (err) {
            console.error(err.message);
        }
    }
    console.log('Finished downloads.');
}

main();
