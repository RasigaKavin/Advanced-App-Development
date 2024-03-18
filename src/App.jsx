import './App.css'

import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import EventGallery from './Components/EventGallery'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Home from './Components/Home'
import LoginContainer from './Components/LoginContainer'

function App(){


  return (
    <>
    <Router>
    
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about us' element={<About/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/event gallery' element={<EventGallery/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/login' element={<LoginContainer/>}></Route>
   

    </Routes>
    </Router>
      
     <div>
     </div>
      
      
    </>
  )
}

export default App
