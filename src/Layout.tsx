import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { AppRoutes } from './routes/AppRoutes'

const Layout = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  )
}

export default Layout