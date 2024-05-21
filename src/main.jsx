import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import './i18next.jsx'

const loader = document.getElementById('loader')

function closeLoader() {
  loader.style.display = 'none'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback={closeLoader()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
)
