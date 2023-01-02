import React,{useState} from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navbar from './components/headers/Navbar';
import Home from './components/Home';
import About from './components/About';
import Brands from './components/Brands';
import Solution from './components/Solution';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/footer/Footer';
import NotFound from './components/NotFound';
import Privacy from './components/Privacy';
import Refund from './components/Refund';
import Quality from './components/Quality';
import Nda from './components/Nda';
import TermCondition from './components/TermCondition';
import HireTeam from './components/HireTeam';
import Seo from './components/Seo';
import Success from './components/Success';
import Insights from './components/Insights';
import Uix from './components/Uix';
import Environement from './components/Environement';
import MobileApp from './components/MobileApp';
const App = () => {
     const [mode, setMode] = useState("dark");
  const [value, setValue] = useState("Enable Dark Mode");
  
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#222";
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      setValue("Enable Light Mode");
    }
  };
  return (
       <Router>
            <Navbar toggleMode={toggleMode} mode={mode}/>
            <Routes>
                <Route exact path='/' element={<Home mode={mode}/>}/>
                <Route exact path='/about' element={<About mode={mode}/>}/>
                <Route exact path='/brand' element={<Brands mode = {mode}/>}/>
                <Route exact path='/hiring' element={<HireTeam mode={mode}/>}/>
                <Route exact path='/service' element={<Service/>}/>
                <Route exact path='/solution' element={<Solution/>}/>
                <Route exact path='/success' element={<Success mode = {mode}/>}/>
                <Route exact path='/contact' element={<Contact mode={mode}/>}/>
                <Route exact path='/insight' element={<Insights/>}/>
                <Route exact path='/uiux' element={<Uix/>}/>
                <Route exact path='/mobileApp' element={<MobileApp/>}/>
                <Route exact path='/privacy' element={<Privacy/>}/>
                <Route exact path='/refund' element={<Refund/>}/>
                <Route exact path='/quality' element={<Quality/>}/>
                <Route exact path='/nda' element={<Nda/>}/>
                <Route exact path='/term' element={<TermCondition/>}/>
                <Route exact path='/seo' element={<Seo/>}/>
                <Route exact path='/environment' element={<Environement/>}/>
                <Route exact path="*" element={<NotFound/>} />
            </Routes>
            <Footer/>
       </Router>
    
  )
}

export default App