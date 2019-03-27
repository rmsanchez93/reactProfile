import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let skills = ['MongoDB','Express', 'React.js', 'Node.js']
    let projects = [
      {
        title: 'BarPar',
        sum: 'MERN Stack- Inventory, Employee and Bar Relations Application. Worked on MongoDB Schemas and Inventory components'
      },
      {
        title: 'Fortress Fabrication WebPage',
        sum: 'React front-end app. Soon to be an active online webstore. Built this for a fabrication shop'

                          }];
    return (
      <div className="App">
        <Header 
        titleHeader = '{Raul M. Sanchez}'/>
        <div className='bifoldContainer'>
        <div className= 'resume'>
          <h1>Past Projects</h1>
          <p> List of projects I've worked on using skills spanning from React SPA's, Node.js, HTML/CSS, MySQL, MongoDB, Javascript, Jquery </p>
          
          {projects.map((project , i)=> <ProjectCard key={i} id= {i} title={project.title} sum={project.sum}/>)}
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
