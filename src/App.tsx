import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { useEffect } from 'react'

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/contact');
    }
  }, [navigate]);

  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <Header />
          <main className='mb-14 mt-10 md:px-0'>
            <Routes>
              <Route path='/contact' element={<ContactUs />} />
            </Routes>
          </main>
        <Footer />
      </div>
    </>
  )
}

export default App
