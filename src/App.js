import React from "react"
import Header from "./components/Header"
import Main_page from "./components/Main_page"

class App extends React.Component {
  render(){
    return (<div className = "name">
      <Header /> 
      <Main_page />
    </div>)
  }
}

export default App