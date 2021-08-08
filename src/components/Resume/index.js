import React from 'react'
import "../../App.css";

function Resume() {
    return (
        <section>
            <div className="center">
                <h1 className="header" id="resume">
                    Resume
                    </h1>
            </div>
            <div>
                <h4>Proficient at</h4>
                <ol>
                    <li> HTML</li>
                    <li> CSS </li>
                    <li> JS </li>
                    <li> NodeJS</li> 
                    <li> React</li>
                    <li> Jquery</li>
                    <li> Express</li>
                    <li> PWA </li>
                </ol>
            </div>
            <h4> Dev Tool/DataBase</h4>
            <ol>
                <li> MySql</li>
                <li> Sequelize </li>
                <li> MongoDb</li>
                <li> GraphQl</li>
                <li> Mongoose</li>
                <li> Git </li>
                <li> npm </li>
                <li> webpack </li> 
            </ol>
        </section>
    )
}

export default Resume;
