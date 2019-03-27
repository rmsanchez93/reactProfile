import React from 'react'
import './Header.css'

export default function Header (props){
    return(
        <header className="App-header">
        <h1 className="title">{props.titleHeader}</h1>
        <hr></hr>
        <h3>MERN stack enthusiast looking for a Modern Work Environment</h3>          
          
        </header>
    )
}