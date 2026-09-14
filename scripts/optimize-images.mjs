// Minnkar og þjappar myndum í public/images (max 2000px breidd, mozjpeg q80).
// Keyrt með: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir, readFile, stat, rename, unlink } from "node:fs/promises";
import path from "node:path";

const dir = path.resolve("public/images");
const MAX_W = 2000;
const files = (await readdir(dir)).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));

let before = 0;
let after = 0;
for (const f of files) {
  const src = path.join(dir, f);
  const { size } = await stat(src);
  before += size;

  // Lesum í buffer svo skráin sé ekki læst þegar við skiptum henni út (Windows)
  const img = sharp(await readFile(src), { failOn: "none" }).rotate();
  const meta = await img.metadata();
  const w = Math.min(meta.width ?? MAX_W, f.startsWith("logo") ? 640 : MAX_W);

  const ext = path.extname(f).toLowerCase();
  const tmp = src + ".tmp";
  let pipeline = img.resize({ width: w, withoutEnlargement: true });
  if (ext === ".webp") pipeline = pipeline.webp({ quality: 80 });
  else if (ext === ".png") pipeline = pipeline.png({ compressionLevel: 9 });
  else pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true, progressive: true });

  await pipeline.toFile(tmp);
  const { size: newSize } = await stat(tmp);
  if (newSize < size) {
    await unlink(src);
    await rename(tmp, src);
    after += newSize;
    console.log(`${f}: ${(size / 1024).toFixed(0)}KB -> ${(newSize / 1024).toFixed(0)}KB (${meta.width}px -> ${w}px)`);
  } else {
    await unlink(tmp);
    after += size;
    console.log(`${f}: óbreytt (${(size / 1024).toFixed(0)}KB)`);
  }
}
console.log(`\nSamtals: ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(1)}MB`);
