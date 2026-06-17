import sharp from "sharp"
import { fileURLToPath } from "node:url"
import path from "node:path"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const src = path.join(root, "public", "logo.jpg")
const appDir = path.join(root, "src", "app")

async function run() {
  // Favicon / icon (link rel=icon)
  await sharp(src).resize(256, 256, { fit: "cover" }).png().toFile(path.join(appDir, "icon.png"))

  // Apple touch icon
  await sharp(src).resize(180, 180, { fit: "cover" }).png().toFile(path.join(appDir, "apple-icon.png"))

  // Open Graph image: logo centered on brand-blue canvas (1200x630)
  const logo = await sharp(src).resize(420, 420, { fit: "contain", background: "#ffffff" }).png().toBuffer()
  await sharp({
    create: { width: 1200, height: 630, channels: 4, background: "#0B2540" },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toFile(path.join(appDir, "opengraph-image.png"))

  console.log("Generated icon.png, apple-icon.png, opengraph-image.png")
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
