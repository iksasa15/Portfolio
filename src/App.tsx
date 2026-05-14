import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PortfolioPage } from './portfolio/PortfolioPage'
import { RefundsPage } from './portfolio/RefundsPage'
import { ServicesPage } from './portfolio/ServicesPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/refunds" element={<RefundsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
