import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import fs from 'node:fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = __dirname
const htmlPath = path.join(root, 'html', 'سلسلة-التعلم-العميق.html')
const outDir = path.join(root, 'png', 'سلسلة-التعلم-العميق')

const require = createRequire(import.meta.url)

async function main() {
  let puppeteer
  try {
    puppeteer = require('puppeteer')
  } catch {
    console.error('puppeteer missing')
    process.exit(1)
  }

  fs.mkdirSync(outDir, { recursive: true })
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 1 })
  await page.goto(pathToFileURL(htmlPath).href, {
    waitUntil: 'networkidle0',
    timeout: 120000,
  })
  // wait for fonts
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready
  })
  await new Promise((r) => setTimeout(r, 800))

  for (let i = 1; i <= 10; i++) {
    const el = await page.$(`#p${i}`)
    if (!el) throw new Error(`Missing #p${i}`)
    const out = path.join(outDir, `سلسلة-التعلم-العميق-${String(i).padStart(2, '0')}.png`)
    await el.screenshot({ path: out, type: 'png' })
    console.log('wrote', out)
  }

  await browser.close()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
