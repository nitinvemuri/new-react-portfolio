import React from 'react';
import Treeko from '../../assets/img/treeckoIcon.png'

function Nav(props) {
  const {navHeader = [], currentNavHeader, setCurrentNavHeader} = props;

  return(
    <header>
      <h1>
         <img src= {Treeko} style= {{width: "5%"}} alt = "treeko"/><a href = "/" >Nitin's Portfolio</a>
      </h1>
      <nav> 
        <ul>
          {navHeader.map((navHeader) => ( 
            <li className = {currentNavHeader.name === navHeader.name && 'navActive'} key={navHeader.org}>
              <a href = {`#${navHeader.org}`}
                className="coolbtn"
                onClick={() => setCurrentNavHeader(navHeader)}
              >
                {navHeader.name}
              </a>

            </li>
          ))}
          
        </ul>
      </nav>
    </header>
  )
}

export default Nav;