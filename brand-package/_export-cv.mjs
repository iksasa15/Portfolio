import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import fs from 'node:fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)
const puppeteer = require('puppeteer')

async function exportSet({ html, outDir, prefix, idPrefix, count, viewport }) {
  fs.mkdirSync(outDir, { recursive: true })
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
  const page = await browser.newPage()
  await page.setViewport(viewport)
  await page.goto(pathToFileURL(html).href, {
    waitUntil: 'networkidle0',
    timeout: 120000,
  })
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready
  })
  await new Promise((r) => setTimeout(r, 800))

  for (let i = 1; i <= count; i++) {
    const el = await page.$(`#${idPrefix}${i}`)
    if (!el) throw new Error(`Missing #${idPrefix}${i}`)
    const out = path.join(outDir, `${prefix}-${String(i).padStart(2, '0')}.png`)
    await el.screenshot({ path: out, type: 'png' })
    console.log('wrote', out)
  }
  await browser.close()
}

const root = __dirname
await exportSet({
  html: path.join(root, 'html', 'سلسلة-الرؤية-الحاسوبية.html'),
  outDir: path.join(root, 'png', 'سلسلة-الرؤية-الحاسوبية'),
  prefix: 'سلسلة-الرؤية-الحاسوبية',
  idPrefix: 'p',
  count: 15,
  viewport: { width: 1200, height: 1600, deviceScaleFactor: 2 },
})
await exportSet({
  html: path.join(root, 'html', 'ستوريات-الرؤية-الحاسوبية.html'),
  outDir: path.join(root, 'png', 'ستوري-الرؤية-الحاسوبية'),
  prefix: 'ستوري-الرؤية-الحاسوبية',
  idPrefix: 's',
  count: 15,
  viewport: { width: 1200, height: 2200, deviceScaleFactor: 2 },
})
