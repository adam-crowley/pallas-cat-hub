import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import '../app.css'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
