import React from "react"

class Main_page extends React.Component {
  render(){
    return(
        <div className="store">
            <h2>Магазины</h2>
            <select className="storeSelector" id="storeSelector" onchange="showStoreInfo()">
                <option value="store1">Ленина, 70</option>
                <option value="store2">Профсоюзная, 14</option>
                <option value="store3">Советская, 47 </option>
            </select>
        </div>
    )
  }
}

export default Main_page