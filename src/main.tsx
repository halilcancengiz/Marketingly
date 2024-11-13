import { createRoot } from 'react-dom/client'
import Layout from './Layout.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(

  <BrowserRouter>
    <Layout />
  </BrowserRouter>

)
