/**
 * One-off image optimiser.
 *
 * The camera originals are 6720x4480 and 6-8MB each. Next resizes them on
 * request, but the browser still decodes the full-size source, which blocks the
 * main thread badly enough to stall the intro counter. This downsizes them once
 * so both the build and the runtime stay light.
 *
 * Originals are moved to assets-original/ (outside public/) rather than
 * deleted, so nothing is lost.
 *
 *   node scripts/optimize-images.mjs
 */
import { mkdir, readdir, rename, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC = path.join(process.cwd(), "public");
const BACKUP = path.join(process.cwd(), "assets-original");

const MAX_WIDTH = 2400; // plenty for full-bleed backgrounds on a 2x display
const JPEG_QUALITY = 78;
const LOGO_WIDTH = 400;

const mb = (bytes) => (bytes / 1048576).toFixed(2) + " MB";

await mkdir(BACKUP, { recursive: true });

const entries = await readdir(PUBLIC);
const targets = entries.filter((f) => /\.(jpe?g|png)$/i.test(f));

let before = 0;
let after = 0;

for (const file of targets) {
  const src = path.join(PUBLIC, file);
  const originalSize = (await stat(src)).size;
  before += originalSize;

  const isLogo = /^logo\./i.test(file);
  const backupPath = path.join(BACKUP, file);
  await rename(src, backupPath);

  // Photos become .jpg regardless of source container; the logo keeps PNG
  // because it needs the alpha channel.
  const outName = isLogo ? file : file.replace(/\.[^.]+$/, ".jpg");
  const outPath = path.join(PUBLIC, outName);

  const pipeline = sharp(backupPath).rotate().resize({
    width: isLogo ? LOGO_WIDTH : MAX_WIDTH,
    withoutEnlargement: true,
  });

  if (isLogo) {
    await pipeline.png({ compressionLevel: 9, palette: true }).toFile(outPath);
  } else {
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(outPath);
  }

  const newSize = (await stat(outPath)).size;
  after += newSize;
  console.log(`${file} -> ${outName}   ${mb(originalSize)} -> ${mb(newSize)}`);
}

console.log(`\nTotal: ${mb(before)} -> ${mb(after)}`);
