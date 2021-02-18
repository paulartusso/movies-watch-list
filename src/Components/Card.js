import React from "react";
import "../Styles/Card.css";

const Card = props =>{

    return(
        <div>
            <div className="card">
            </div>
            <p>{props.title}</p>
        </div>
    )
}

export default Card;