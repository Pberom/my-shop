import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Header from './components/Header'

function ContentWrapper() {
  useLocation()
  return(
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

function App() {
  return(
    <BrowserRouter>
    <Header/>
      <ContentWrapper/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App