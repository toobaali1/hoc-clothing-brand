import React from "react";
import "./shirt.styles.css";
import blueshirt from "./../../images/shirts/BlueShirt.png";
import redshirt from "./../../images/shirts/RedShirt.png";
import yellowshirt from "./../../images/shirts/YellowShirt.png";


import withColorChange from "./../../with-colorchange";


const Shirt = ({handleCount, itemToRender}) => {
    return(
        <div>
        <div className="shirt" onClick={handleCount}>
           <img src = {itemToRender} alt="shirt-img"/>
        </div>
            <p>Click Shirt to change color!</p>
        </div>
    )
}
     
export default withColorChange(Shirt,[blueshirt,yellowshirt,redshirt]);