import React from "react"
import { Link } from "react-router-dom"
import "./header.css"
export default function Header(){
    return(
        <div className="big">
        <div className="container">
            <img src="https://static.vecteezy.com/system/resources/previews/000/537/032/original/crown-symbol-with-black-color-isolate-on-white-background-vector-illustration.jpg " alt="pngImage" />
            </div>
            <ul className="list">
                <li >
                  <Link to= '/'> Home </Link>
                    </li>
                <li  >
                <Link to ='/about'> About</Link>
                    </li>
                <li  >
                 <Link to = "/contact">Contact</Link> 
                    </li>
            </ul>
            </div>
    )
}