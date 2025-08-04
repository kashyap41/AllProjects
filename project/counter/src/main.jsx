import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import CounterApp from './App.jsx'
// import App from './Countr.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp/>
  </StrictMode>,
)
