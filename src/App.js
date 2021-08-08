import React, { useState } from 'react'
import './App.css';
import About from './components/About'
import ContactForm from './components/Contact';
//import Header from './components/Header';
import Footer from './components/Footer'
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav'



function App() {

  const [navHeader] = useState([
    { name: 'About', org: "about"},
    { name: 'Contact', org: 'contact-form'},
    { name: 'Resume', org: 'resume'},
    { name: 'Portfolio', org: 'portfolio'}
  ])

  const [currentNavHeader, setCurrentNavHeader] = useState(navHeader[0]);

  function Display(navHeader) {
    switch(navHeader) {
      case "About":
        return <About></About>
      case "Contact":
        return <ContactForm></ContactForm>
      case "Resume":
        return <Resume></Resume>
      case "Portfolio":
        return <Portfolio></Portfolio>
      default:
        return <About></About>;
    }
  }

  return(
    <div>
      <Nav
      navHeader ={navHeader}
      setCurrentNavHeader = {setCurrentNavHeader}
      currentNavHeader = {currentNavHeader}>
        
      </Nav>
      <main>
        {Display(currentNavHeader.name)}
      </main>
      <Footer></Footer>
      
    </div>
  )

}
export default App;
