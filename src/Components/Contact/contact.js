
import React from "react"
import "./contact.css"
export default function Contact() {
  const [info, setInfo] = React.useState({
    fullname: "",
    email:"",
    phone:"",
    message:""
  })
  function handleChange(e){
    const {name,value} = e.target
    setInfo((prev)=>{
      return {
          ...prev,
          [name]: value
      }
    })
  }
  function handleSubmit(){

  }
  return (
    <div >
      <div className = "box">
        <div className = "smallBox" onSubmit = {handleSubmit}>
          <h1 className = "heading">FEEL FREE TO REACH OUT!</h1>
          <div className = "content">
          <input type = "text"
                 placeholder = "Full Name"
                 value = {info.fullname}
                 name = "fullname"
                 onChange = {handleChange} />

                  <input type = "email"
                 placeholder = "Email"
                 value = {info.email}
                 name = "email"
                 onChange = {handleChange} />

                  <input type = "text"
                 placeholder = "Mobile"
                 value = {info.phone}
                 name = "phone"
                 onChange = {handleChange} />

                 <textArea
                 placeholder = "Enter a message"
                 value = {info.message}
                 name = "message"
                 onChange = {handleChange} />
                 <br />
                 <div><button type = "submit" value="submit" className="btn" >SUBMIT</button>
                 </div>
                
        </div>
      </div>
    </div>
    </div>
  )
}
 

