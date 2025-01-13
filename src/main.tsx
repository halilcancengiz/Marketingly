import { createRoot } from 'react-dom/client'
import Layout from './Layout.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById('root')!).render(

  <HelmetProvider>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </HelmetProvider>

)
