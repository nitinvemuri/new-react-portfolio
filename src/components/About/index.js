import React from 'react';
import Photo from '../../assets/img/IMG_7233.JPG'

function About() {
    return(
        <section>
            <h1 id = "about "> Nitin Vemuri </h1>
            <img src = {Photo} className="my2" style={{width: "10%"}} alt="myPhoto"/>
            <div className="my2">
                <p>
                    My name is Nitin Vemuri and I am 21. Currently I go to Uc Davis for Economics and I like to play videogames, watching sports, trading, and going to the gym. My favorite games are Overwatch and Pokemon and my favorite teams are the Las Vegas Raiders, Phoenix Suns, and Liverpool.
                </p>
            </div>
        </section>
    );
}

export default About;