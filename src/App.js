import React from "react"
import Header from "./components/Header"
import logo from "./img/logo.png"

class App extends React.Component {
  render(){
    return (<div className = "name">
      <div className="header_logo">
        <img className="image" src={logo}/>
        <Header /> 
      </div> 
    </div>)
  }
}

export default App