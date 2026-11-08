import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Marketplace from './Marketplace.jsx'

createRoot(document.getElementById('root')).render(<StrictMode><div style={{paddingTop:4}}><Marketplace user={null} /></div></StrictMode>)
