import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.tailwind.css'
import './style/index.css'
import { App } from './components/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
