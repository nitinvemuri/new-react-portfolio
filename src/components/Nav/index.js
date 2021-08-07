import React from 'react';

function Nav(props) {
  const {currentTab, setCurrentTab} = props;

  return (
    <div class = 'flex-row'>
      <nav>
        <ul className="flex-row">
        <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
					<span onClick={() => setCurrentTab("about")}>About Me</span>
				</li>
        <li className={currentTab === "portfolio" ? "mx-2 navActive": "mx-2"}></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav;