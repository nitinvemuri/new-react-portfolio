import React from "react";
import Apps from '../Portfolio/portfolioCSS';
import imageBudget from '../../assets/img/IMG_0.png';
import calendarImage from '../../assets/img/IMG_4.png';
import passGenImage from '../../assets/img/IMG_1.png';
import gearlessJoe from '../../assets/img/IMG_3.png';
import htmlResume from "../../assets/img/htmlResume.png"
import noteTaker from "../../assets/img/noteTaker.png"

function Portfolio() {
    const projectApps = ([
        { name: 'Budget Tracker', Description: 'Allows users to budget offline', image: imageBudget , github:"https://github.com/nitinvemuri/Hw19", deployed: 'https://mysterious-reaches-98499.herokuapp.com'},
        { name: 'Workday Schedule', Description: 'Allows users to put in their workday on a calender', image: calendarImage , github:"https://github.com/nitinvemuri/hw5", deployed:"https://nitinvemuri.github.io/hw5/" },
        { name: "Password Generator", Description: 'Allows users to make a random password', image: passGenImage , github: "https://github.com/nitinvemuri/pass-gen", deployed:"https://nitinvemuri.github.io/pass-gen/"},
        { name: "Tech Blog", Description: "Allows users to chat like a blog", image: gearlessJoe, github:"https://github.com/nitinvemuri/Tech-blog-", deployed: "https://enthousiaste-saucisson-44554.herokuapp.com/"},
        { name: "HTML/CSS/JS Portfolio", Description: "Make a portfolio using HTML/CSS/JS", image: {htmlResume}, github: "https://github.com/nitinvemuri/Advancecsschallenge", deployed: "https://nitinvemuri.github.io/Advancecsschallenge/"},
        { name: "Note Taker", Description: "Allows user to take notes", image:{noteTaker}, github: "https://github.com/nitinvemuri/HW11", deployed: "https://radiant-island-10520.herokuapp.com/"}
    ]);

    return (
        <section>
          <div className="center">
            <h1 className="page-header" id="portfolio"> Portfolio</h1>
          </div>
          <div>
            <ul className="flex-row">
              <li className="padding">
                <Apps projectApps={projectApps[0]}></Apps>
              </li>
              <li className="padding">
                <Apps projectApps={projectApps[1]}></Apps>
              </li>
            </ul>
            <ul className="flex-row mobile-row">
              <li className="padding">
                <Apps projectApps={projectApps[2]}></Apps>
              </li>
              <li className="padding">
                <Apps projectApps={projectApps[3]}></Apps>
              </li>
              </ul>
              <ul className = "flex-row mobile-row">
              <li className = "padding">
                  <Apps projectApps = {projectApps[4]}></Apps>
              </li>
              <li className = "padding">
                  <Apps projectApps = {projectApps[5]}></Apps>
              </li>
            </ul>

          </div>
        </section>
      );
    
};


export default Portfolio;