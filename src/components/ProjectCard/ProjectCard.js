import React from 'react';


// export default function Header (props){

export default function ProjectCard (props){

    return(
        <div className ='project'>
          <h1>{props.title}</h1>
          <p>{props.sum}</p>
          <img src= 'https://fakeimg.pl/640x360' alt={props.title}>
          </img>

          </div>
    )
}