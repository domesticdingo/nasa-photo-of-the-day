import React from "react";

const CardMaker = props => {
    return (
        <div className="photo-list">
            <h2>{props.date}</h2>
            <img alt ="Random NASA photo" src={props.url}/>
            <p>{props.explanation}</p>
        </div>
    )
}

export default CardMaker