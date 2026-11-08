import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Account from './Account.jsx'

createRoot(document.getElementById('root')).render(<StrictMode><div style={{paddingTop:4}}><Account user={null} onLogout={() => {}} onLogin={() => {}} /></div></StrictMode>)
