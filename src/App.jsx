import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import {Toaster} from 'sonner'
import Home from './Pages/Home'
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Events from './Pages/Events'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Categories from './Components/Categories'
import Category from './Components/Category'
import Footer from './Components/Footer'
import Event from './Components/Event'
import ChildrenEvent from './Components/ChildrenEvent'
import Ticker from './Components/TIcker'

function App() {
  return (
    <div>
      <Toaster position='top-right' richColors/>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path='/Categories' element={<Categories/>}/>
        <Route path='/Categories/:id' element={<Category/>}/>
        <Route path="/Events/" element={<Events />} />
        <Route path="/Events/:id" element={<Event />} />
        <Route path="/Events/children/:child" element={<ChildrenEvent />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
      <Ticker/>
    </div>
  )
}

export default App
