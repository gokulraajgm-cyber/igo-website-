import fs from 'fs';
import path from 'path';
import https from 'https';

const imageDir = path.resolve('public/images');

if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true });
}

const imagesToDownload = [
    { url: 'https://www.igoagritechfarms.com/images/Polyhouse.jpeg', filename: 'Polyhouse.jpeg' },
    { url: 'https://www.igoagritechfarms.com/images/hydro1.jpg', filename: 'hydro1.jpg' },
    { url: 'https://www.igoagritechfarms.com/images/jointventure.png', filename: 'jointventure.png' },
    { url: 'https://www.igoagritechfarms.com/images/opencultivation.jpg', filename: 'opencultivation.jpg' },
    { url: 'https://www.igoagritechfarms.com/images/vertical.jpeg', filename: 'vertical.jpeg' },
    { url: 'https://www.igoagritechfarms.com/images/goat.jpeg', filename: 'goat.jpeg' },
    { url: 'https://www.igoagritechfarms.com/images/micro-3.png', filename: 'micro-3.png' }
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
    console.log('Starting project images downloads...');
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
