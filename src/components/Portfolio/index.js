import React from "react";
import Project from '../Portfolio/portfolioCSS';
import imageBudget from '../../assets/img/IMG_0.png';
import calendarImage from '../../assets/img/IMG_4.png';
import passGenImage from '../../assets/img/IMG_1.png';
import gearlessJoe from '../../assets/img/IMG_3.png';

function Portfolio() {
    const projectApps = ([
        { name: 'Budget Tracker', Description: 'Allows users to budget offline', image: imageBudget , github:"https://github.com/nitinvemuri/Hw19", deployed: 'https://mysterious-reaches-98499.herokuapp.com'},
        { name: 'Workday Schedule', Description: 'Allows users to put in their workday on a calender', image: calendarImage , github:"https://github.com/nitinvemuri/hw5", deployed:"https://nitinvemuri.github.io/hw5/" },
        { name: "Password Generator", Description: 'Allows users to make a random password', image: passGenImage , github: "https://github.com/nitinvemuri/pass-gen", deployed:"https://nitinvemuri.github.io/pass-gen/"},
        { name: "Tech Blog", Description: "Allows users to chat like a blog", image: gearlessJoe, github:"https://github.com/nitinvemuri/Tech-blog-", deployed: "https://enthousiaste-saucisson-44554.herokuapp.com/"},
    ]);

    return (
        <section>
          <div className="center">
            <h1 className="page-header"> Portfolio</h1>
          </div>
          <div>
            <ul className="flex-row mobile-row">
              <li className="padding">
                <Project projectApps={projectApps[0]}></Project>
              </li>
              <li className="padding">
                <Project projectApps={projectApps[1]}></Project>
              </li>
            </ul>
            <ul className="flex-row mobile-row">
              <li className="padding">
                <Project projectApps={projectApps[2]}></Project>
              </li>
              <li className="padding">
                <Project projectApps={projectApps[3]}></Project>
              </li>
            </ul>

          </div>
        </section>
      );
    
};


export default Portfolio;