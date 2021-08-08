import React from 'react';

function Nav(props) {
  const {navHeader = [], currentNavHeader, setCurrentNavHeader} = props;

  return(
    <header>
      <h1>
        <a href = "/"> Nitin Portfolio</a>
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