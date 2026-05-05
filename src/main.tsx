import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './font.css'
import './index.css'
import App from './App.tsx'
import { LocaleProvider } from './locale/LocaleProvider'
import { ThemeProvider } from './theme/ThemeProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <App />
      </LocaleProvider>
    </ThemeProvider>
  </StrictMode>,
)
