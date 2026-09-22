import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cronometro from './pages/Cronometro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cronometro/>
  </StrictMode>,
)
