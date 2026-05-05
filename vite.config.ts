import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * خطة تحسين الأداء (Lighthouse / Core Web Vitals) — ما يُطبَّق هنا:
 *
 * 1) خطوط: تقليل @font-face إلى الأوزان المستخدمة فقط — في `src/font.css`.
 * 2) جافاسكربت: `manualChunks` لتجميع React في ملف كاش منفصل يتحدّث أقل عند تغيير كودك.
 * 3) build.target حديث لتقليل حجم transpile قليلاً.
 *
 * خطوات لاحقة (يدوية / بعد النشر):
 * - تحويل TTF → woff2 + subset للأحرف العربية/اللاتينية المستخدمة فقط.
 * - قياس Lighthouse على النسخة المبنية (`npm run build && npm run preview`).
 * - ضغط Brotli/Gzip من خادم الإنتاج (مثلاً Vercel يفعّلها تلقائياً).
 */
export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes('node_modules/react-dom') ||
            id.includes('node_modules/react/')
          ) {
            return 'react-vendor'
          }
        },
      },
    },
  },
})
