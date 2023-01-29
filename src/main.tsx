import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import './styles/tailwind.css'
import './styles/app.css'
import './styles/fonts.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
