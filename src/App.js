import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import ImgMediaCard from './components/ImgMediaCard/ImgMediaCard'
import barpar from './images/barpar.png'
import fortress from './images/fortress.jpg'
import train from './images/trainschedule.png'
import liri from './images/Liri.png'




class App extends Component {
  render() {
    let skills = ['MongoDB/Mongoose','Express', 'React.js', 'Redux', 'Node.js', 'MySQL/Sequelize','Javascript/ES6','Project Planning', 'Angular', 'C#', 'Electron',]
    let projects = [
      {
        title: 'BarPar',
        sum: '1 of 7 contributors in this MERN Stack project. Inventory, Employee and Bar Relations Application. Worked on MongoDB Schemas and Inventory components',
        image: barpar,
        code: "https://github.com/PushyPants/bar-par",
        project: "http://barpar.herokuapp.com/"
      },
      {
        title: 'Fortress Fabrication WebPage',
        sum: 'React front-end app. Soon to be an active online webstore. Built this for a fabrication shop',
        image: fortress,
        code: "code",
        project: "project"
      },
      {
        title: 'Train Scheduler',
        sum: 'Moment.js and firebase application, built on a static HTML page. Application gives user next available train relative to current time given User input in minutes.',
        image: train,
        code: "https://github.com/rmsanchez93/TrainSchedule",
        project: "https://rmsanchez93.github.io/TrainSchedule/"
      },
      {
        title: 'LIRI- Node Project',
        sum: 'Pure node.js project using dotenv library and accessing Spotify and Twitter APIs',
        image: liri,
        code: "https://github.com/rmsanchez93/liri-node-app",
        project: "project"
      }

                          ];
    return (
      <div className="App">
        <Header 
        titleHeader = '{Raul M. Sanchez}'/>
        <div className='bifoldContainer'>
        <div className= 'resume'>
          <h1>Past Projects</h1>
          <p> List of projects I've worked on using skills spanning from React SPA's, Node.js, HTML/CSS, MySQL, MongoDB, Javascript, Jquery </p>
          
          {projects.map((project , i)=> <ImgMediaCard key={i} id= {i} title={project.title} sum={project.sum} imgStatic={project.image} code ={project.code} project ={project.project}/>)}
        </div>
        <div className = 'skills'>
          <h1>Skills</h1>
          <p>Technologies and Methodologies I've worked on </p>
          <hr/>
          {skills.map(el => <li id={el}>{el}</li>)}
          
        </div>
        </div>
      </div>
    );
  }
}

export default App;
