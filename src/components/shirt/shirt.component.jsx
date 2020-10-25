import React from "react";
import "./shirt.styles.css";
import blueshirt from "./../../images/shirts/BlueShirt.png";
import redshirt from "./../../images/shirts/RedShirt.png";
import yellowshirt from "./../../images/shirts/YellowShirt.png";


class Shirt extends React.Component {
    constructor(){
        super();

        this.state = {
            shirtCount: 0,
            shirts:[blueshirt,redshirt,yellowshirt]
        }
    }

    handleShirtCount = () => {
        this.state.shirtCount < 2 ?
        this.setState({shirtCount: this.state.shirtCount + 1}) :
        this.setState({shirtCount: 0})
    }

    render(){
        return(
            <div>
                <div className="shirt" onClick={() => this.handleShirtCount()}>
                <img src = {this.state.shirts[this.state.shirtCount]} alt="shirt-img"/>
                </div>
                <p>Click Shirt to change color!</p>
            </div>
        )
    }
}

export default Shirt; 