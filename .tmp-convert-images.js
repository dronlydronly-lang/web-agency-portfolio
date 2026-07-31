const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PUB = path.join(__dirname, "public");

const jobs = [
  ["menu/espresso", 800, 600, 82],
  ["menu/cappuccino", 800, 600, 82],
  ["menu/latte", 800, 600, 82],
  ["menu/flat-white", 800, 600, 82],
  ["menu/cheesecake", 800, 600, 82],
  ["menu/kruassan", 800, 600, 82],

  ["products/coat", 800, 800, 82],
  ["products/sweater", 800, 800, 82],
  ["products/jeans", 800, 800, 82],
  ["products/shirt", 800, 800, 82],
  ["products/bag", 800, 800, 82],
  ["products/shoes", 800, 800, 82],

  ["agency/aroma-cafe", 960, 540, 80],
  ["agency/elit-berber", 960, 540, 80],
  ["agency/trend-butik", 960, 540, 80],
  ["agency/arxitekt-mmc", 960, 540, 80],
  ["agency/foto-studio", 960, 540, 80],
  ["agency/gundem-bloq", 960, 540, 80],

  ["agency/deniz-avatar", 400, 400, 85],
];

const galleryJobs = ["gallery/toy1", "gallery/toy2", "gallery/toy3", "gallery/toy4", "gallery/toy5", "gallery/toy6"];

function findExisting(baseNoExt) {
  const exts = ["jpg", "jpeg", "png", "webp"];
  for (const ext of exts) {
    const p = path.join(PUB, `${baseNoExt}.${ext}`);
    if (fs.existsSync(p)) return { path: p, ext };
  }
  return null;
}

async function run() {
  for (const [base, w, h, q] of jobs) {
    const found = findExisting(base);
    if (!found) {
      console.log("SKIP (not found):", base);
      continue;
    }
    const outPath = path.join(PUB, `${base}.webp`);
    const buf = await sharp(found.path)
      .resize({ width: w, height: h, fit: "cover", position: sharp.strategy.attention })
      .webp({ quality: q })
      .toBuffer();
    fs.writeFileSync(outPath, buf);
    const beforeSize = fs.statSync(found.path).size;
    console.log(`${base}: ${found.ext} ${beforeSize}b -> webp ${buf.length}b (${w}x${h}, q${q})`);
    if (found.ext !== "webp") fs.unlinkSync(found.path);
  }

  for (const base of galleryJobs) {
    const found = findExisting(base);
    if (!found) {
      console.log("SKIP (not found):", base);
      continue;
    }
    const outPath = path.join(PUB, `${base}.webp`);
    const meta = await sharp(found.path).metadata();
    const targetW = Math.min(meta.width || 800, 800);
    const buf = await sharp(found.path)
      .resize({ width: targetW, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toBuffer();
    fs.writeFileSync(outPath, buf);
    const beforeSize = fs.statSync(found.path).size;
    console.log(`${base}: ${found.ext} ${beforeSize}b -> webp ${buf.length}b (natural ratio, w<=${targetW})`);
    if (found.ext !== "webp") fs.unlinkSync(found.path);
  }

  const logoPath = path.join(PUB, "logo.png");
  if (fs.existsSync(logoPath)) {
    const buf = await sharp(logoPath).webp({ quality: 90 }).toBuffer();
    fs.writeFileSync(path.join(PUB, "logo.webp"), buf);
    console.log("logo: png", fs.statSync(logoPath).size, "b -> webp", buf.length, "b (png kept for favicon)");
  }

  console.log("DONE");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
