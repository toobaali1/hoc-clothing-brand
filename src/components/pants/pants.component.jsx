import React from "react";
import "./pants.styles.css";
import bluepants from "./../../images/pants/BluePants.png";
import purplepants from "./../../images/pants/PurplePants.png";
import yellowpants from "./../../images/pants/YellowPants.png";


class Pants extends React.Component {
    constructor(){
        super();

        this.state = {
            pantsCount: 0,
            pants:[bluepants,purplepants,yellowpants]
        }
    }

    handlePantsCount = () => {
        this.state.pantsCount < 2 ?
        this.setState({pantsCount: this.state.pantsCount + 1}) :
        this.setState({pantsCount: 0})
    }

    render(){
        return(
            <div>
                <div className="pants" onDoubleClick={() => this.handlePantsCount()}>
                <img src = {this.state.pants[this.state.pantsCount]} alt="pants-img"/>
                </div>
                <p>Double Click Pants to change color!</p>
            </div>
        )
    }
}

export default Pants;