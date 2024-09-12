import React, {useState,useEffect} from "react";
import axios from "axios";
import CardMaker from "./cardMaker";
import styled from "styled-components";

const PhotoCard = () => {
    const [picture, setPicture] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=vaKyKNKvVCeOlXZ2Xd1pX5c0NNTpa5bZx7xaobu8")
            .then(response => {
                setPicture(response.data);
            })
            .catch(error => {
                console.log("The data was not returned: " + error)
            })
    }, [])

    return (
        <div>
            <CardMaker
            url={picture.url}
            title={picture.title}
            date={picture.date}
            explanation={picture.explanation}
            copyright={picture.copyright}
            />
            
        </div>
    )
}

export default PhotoCard