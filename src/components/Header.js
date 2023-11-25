import React from "react"
import logo from "./img/logo.png"

class Header extends React.Component {
  render(){
    return(
        <header className="header">
          <img className="image" src={logo}/>
          <h1>Цент за Бренд</h1>
          <h2>+7 (4942) 50-24-00</h2>
        </header>
    )
  }
}

export default Header