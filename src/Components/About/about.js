
import './about.css';
import Data from "./information"
import Card from "./card"

function App() {
  const information = Data.map((item)=>{
    return (
      <Card 
      bgColor = {item.bgColor}
      heading = {item.heading} 
      icon = {item.icon}
      first = {item.first}
      second = {item.second}
      third = {item.third}
      />
    )
  })
  return (
    <div className = "container">
      <h1 className="headline">ABOUT ME</h1>
      {information}
    </div>
  )
}

export default App;