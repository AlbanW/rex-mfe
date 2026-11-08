import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cart from './Cart.jsx'

createRoot(document.getElementById('root')).render(<StrictMode><Cart open onClose={() => {}} user={null} /></StrictMode>)
