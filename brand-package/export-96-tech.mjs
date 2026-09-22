import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import fs from 'node:fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = __dirname
const require = createRequire(import.meta.url)

async function exportSeries({ htmlRel, outRel, prefix, ids, viewport }) {
  const htmlPath = path.join(root, htmlRel)
  const outDir = path.join(root, outRel)
  fs.mkdirSync(outDir, { recursive: true })

  let puppeteer
  try {
    puppeteer = require('puppeteer')
  } catch {
    console.error('puppeteer missing — run: npm i -D puppeteer')
    process.exit(1)
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()
  await page.setViewport(viewport)
  await page.goto(pathToFileURL(htmlPath).href, {
    waitUntil: 'networkidle0',
    timeout: 120000,
  })
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready
  })
  await new Promise((r) => setTimeout(r, 800))

  for (const id of ids) {
    const el = await page.$(`#${id}`)
    if (!el) throw new Error(`Missing #${id} in ${htmlRel}`)
    const n = id.replace(/\D/g, '').padStart(2, '0')
    const out = path.join(outDir, `${prefix}-${n}.png`)
    await el.screenshot({ path: out, type: 'png' })
    console.log('wrote', out)
  }

  await browser.close()
}

async function main() {
  await exportSeries({
    htmlRel: path.join('html', 'سلسلة-٩٦-سنة-تقنية.html'),
    outRel: path.join('png', 'سلسلة-٩٦-سنة-تقنية'),
    prefix: 'سلسلة-٩٦-سنة-تقنية',
    ids: Array.from({ length: 12 }, (_, i) => `p${i + 1}`),
    viewport: { width: 1200, height: 1600, deviceScaleFactor: 1 },
  })

  await exportSeries({
    htmlRel: path.join('html', 'عرض-٩٦-سنة-تقنية.html'),
    outRel: path.join('png', 'عرض-٩٦-سنة-تقنية'),
    prefix: 'عرض-٩٦-سنة-تقنية',
    ids: Array.from({ length: 12 }, (_, i) => `s${i + 1}`),
    viewport: { width: 2000, height: 1200, deviceScaleFactor: 1 },
  })
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
