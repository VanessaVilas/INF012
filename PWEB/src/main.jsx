import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nutricao from './pages/Nutricao'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nutricao/>
  </StrictMode>,
)
