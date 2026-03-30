import sharp from 'sharp';
import { readdir, readFile, stat, writeFile } from 'fs/promises';
import { join, extname, basename, relative } from 'path';

const ASSETS_DIR = './public/assets';
const MAX_WIDTH = 1920;
const MAX_HEIGHT = 1920;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 78;
const WEBP_QUALITY = 82;

let totalBefore = 0;
let totalAfter = 0;
let filesProcessed = 0;
let filesSkipped = 0;
let filesFailed = 0;

async function getAllImageFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      const subFiles = await getAllImageFiles(fullPath);
      files.push(...subFiles);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

// Detect the real image format from file content (magic bytes)
// This handles double-extension files like .jpg.jpeg
function detectFormat(buffer, declaredExt) {
  const sig = buffer.slice(0, 4);
  if (sig[0] === 0xff && sig[1] === 0xd8) return 'jpeg';
  if (sig[0] === 0x89 && sig[1] === 0x50) return 'png';
  if (sig[0] === 0x52 && sig[1] === 0x49) return 'webp'; // RIFF
  // fallback to declared extension
  if (declaredExt === '.jpg' || declaredExt === '.jpeg') return 'jpeg';
  if (declaredExt === '.png') return 'png';
  if (declaredExt === '.webp') return 'webp';
  return null;
}

async function compressImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const stats = await stat(filePath);
  const sizeBefore = stats.size;
  const relPath = relative(ASSETS_DIR, filePath);

  try {
    const inputBuffer = await readFile(filePath);
    const format = detectFormat(inputBuffer, ext);

    if (!format) {
      filesSkipped++;
      return;
    }

    const metadata = await sharp(inputBuffer).metadata();
    let pipeline = sharp(inputBuffer, { failOn: 'none' });

    if ((metadata.width && metadata.width > MAX_WIDTH) || (metadata.height && metadata.height > MAX_HEIGHT)) {
      pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // 1. Optimize the original file
    let originalPipeline = pipeline.clone();
    if (format === 'jpeg') {
      originalPipeline = originalPipeline.jpeg({ quality: JPEG_QUALITY, progressive: true, mozjpeg: true });
    } else if (format === 'png') {
      originalPipeline = originalPipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, progressive: true });
    } else if (format === 'webp') {
      originalPipeline = originalPipeline.webp({ quality: WEBP_QUALITY });
    }

    const originalBuffer = await originalPipeline.toBuffer();
    if (originalBuffer.length < sizeBefore) {
      await writeFile(filePath, originalBuffer);
      totalBefore += sizeBefore;
      totalAfter += originalBuffer.length;
      filesProcessed++;
      console.log(`  ✓ ${relPath} optimized`);
    } else {
      filesSkipped++;
    }

    // 2. Generate WebP version if it's not already a WebP
    if (format !== 'webp') {
      const webpPath = filePath.replace(/\.(png|jpg|jpeg|JPG)$/i, '.webp');
      
      // Check if WebP already exists to avoid redundant work
      let webpExists = false;
      try { await stat(webpPath); webpExists = true; } catch (e) {}

      if (!webpExists) {
        const webpBuffer = await pipeline.clone().webp({ quality: WEBP_QUALITY }).toBuffer();
        await writeFile(webpPath, webpBuffer);
        console.log(`  + Generated WebP: ${relative(ASSETS_DIR, webpPath)}`);
      }
    }
  } catch (err) {
    filesFailed++;
    console.error(`  ✗ ${relPath}  ERROR: ${err.message}`);
  }
}

async function main() {
  console.log('=== IGO Agritech — Image Compression ===\n');
  console.log(`Scanning: ${ASSETS_DIR}\n`);

  const files = await getAllImageFiles(ASSETS_DIR);
  console.log(`Found ${files.length} image files. Compressing...\n`);

  for (const file of files) {
    await compressImage(file);
  }

  console.log('\n=== DONE ===');
  console.log(`Files compressed : ${filesProcessed}`);
  console.log(`Files skipped    : ${filesSkipped} (already small)`);
  console.log(`Files failed     : ${filesFailed}`);
  if (filesProcessed > 0) {
    const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);
    const beforeMB = (totalBefore / 1024 / 1024).toFixed(1);
    const afterMB = (totalAfter / 1024 / 1024).toFixed(1);
    const pct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
    console.log(`\nTotal before     : ${beforeMB} MB`);
    console.log(`Total after      : ${afterMB} MB`);
    console.log(`Space saved      : ${savedMB} MB  (-${pct}%)`);
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
