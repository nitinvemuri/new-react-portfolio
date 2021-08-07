import React, { useState } from 'react'
import './App.css';
import About from './components/About'
import ContactForm from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer'
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';



function App() {

  const [categories] = useState([
    { id: 'about'},
    { id: 'contact'},
    { id: 'resume'},
    { id: 'portfolio'}
  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header
      categories= {categories}
      setCurrentCategory = {setCurrentCategory}
      currentCategory ={currentCategory}
      contactSelected = {contactSelected}
      setContactSelected = {setContactSelected}
      ></Header>
    <main>
      <div className = "about">
      <About></About>
      </div>
      <div className = "resume">
        <Resume></Resume>
      </div>
      <div className = "portfolio">
        <Portfolio></Portfolio>
      </div>
      <div className='contact'>
       <ContactForm></ContactForm>
      </div>
      <div className = "footer">
        <Footer></Footer>
      </div>
    </main>
    </div>
  );
  
}

export default App;
