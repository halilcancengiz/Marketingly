import Navbar from './components/Navbar'
import { AppRoutes } from './routes/AppRoutes'

const Layout = () => {
  return (
    <div className='gap-2 flex flex-col'>
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default Layout