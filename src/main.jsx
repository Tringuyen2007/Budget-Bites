import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Start_page from './Start_page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Start_page />
  </StrictMode>,
)
