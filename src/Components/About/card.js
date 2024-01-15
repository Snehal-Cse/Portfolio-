import React from "react"
import "./card.css"
export default function Card(props){
    return(
        <div className = "box" style ={{backgroundColor: props.bgColor}}>
        <h3 className="heading"> {props.heading}  {props.icon}</h3> 
        <div className = "content">
        <ul className="list">
          <li> {props.first} </li>
          <li> {props.second}</li>
          <li>{props.third}</li> 
        </ul>
        </div>
      </div> 
    )
}



