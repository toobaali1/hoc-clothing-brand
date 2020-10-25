import React from "react";
import "./pants.styles.css";
import bluepants from "./../../images/pants/BluePants.png";
import purplepants from "./../../images/pants/PurplePants.png";
import yellowpants from "./../../images/pants/YellowPants.png";

import withColorChange from "./../../with-colorchange"


const Pants = ({handleCount, itemToRender }) => {
    
        return(
            <div>
                <div className="pants" onDoubleClick={handleCount}>
                    <img src = {itemToRender} alt="pants-img"/>
                </div>
                <p>Double Click Pants to change color!</p>
            </div>
        )
    
}

export default withColorChange(Pants, [bluepants,purplepants,yellowpants]);