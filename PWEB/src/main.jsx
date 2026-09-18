import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Contador from './components/Contador'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contador/>
  </StrictMode>,
)
