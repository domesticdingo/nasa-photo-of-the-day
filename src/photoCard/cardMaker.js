import React from "react";
import styled from "styled-components";

const CardMaker = props => {
    const Description = styled.p`margin: auto; height: auto; width: 1200px;`;
    return (
        <div>
            <h2>Today's Photo:</h2>
            <h2>{props.title}</h2>
            <h2>{props.date}</h2>
            <img alt ="Random NASA photo" src={props.url}/>
            <div className = "explanation">
                <Description>{props.explanation}</Description>
            </div>
            <p>Photo credit: {props.copyright}</p>
        </div>
    )
}

export default CardMaker