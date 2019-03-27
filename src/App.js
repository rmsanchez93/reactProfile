import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
// import ProjectCard from './components/ProjectCard/ProjectCard'
import ImgMediaCard from './components/ImgMediaCard/ImgMediaCard'

class App extends Component {
  render() {
    let skills = ['MongoDB/Mongoose','Express', 'React.js', 'Redux', 'Node.js', 'MySQL/Sequelize','Javascript/ES6','Project Planning', 'Angular', 'C#', 'Electron',]
    let projects = [
      {
        title: 'BarPar',
        sum: 'MERN Stack- Inventory, Employee and Bar Relations Application. Worked on MongoDB Schemas and Inventory components'
      },
      {
        title: 'Fortress Fabrication WebPage',
        sum: 'React front-end app. Soon to be an active online webstore. Built this for a fabrication shop'
      },
      {
        title: 'Train Scheduler',
        sum: 'Moment.js and firebase application, built on a static HTML page. Application gives user next available train relative to current time given User input in minutes.'
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

          {projects.map((project , i)=> <ImgMediaCard key={i} id= {i} title={project.title} sum={project.sum}/>)}
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
