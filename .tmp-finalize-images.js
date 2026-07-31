const fs = require("fs");
const path = require("path");

const PUB = path.join(__dirname, "public");
const STAGE = path.join(__dirname, ".tmp-image-stage");

const manifest = JSON.parse(fs.readFileSync(path.join(STAGE, "manifest.json"), "utf8"));

for (const { base, oldPath, oldExt, stagePath } of manifest.results) {
  const finalPath = path.join(PUB, `${base}.webp`);
  if (oldExt !== "webp" && fs.existsSync(oldPath)) {
    fs.unlinkSync(oldPath);
  }
  fs.copyFileSync(stagePath, finalPath);
  console.log("placed:", base + ".webp");
}

if (manifest.logoStage) {
  fs.copyFileSync(manifest.logoStage, path.join(PUB, "logo.webp"));
  console.log("placed: logo.webp");
}

fs.rmSync(STAGE, { recursive: true, force: true });
console.log("FINALIZE DONE");
