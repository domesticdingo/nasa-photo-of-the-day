import React from "react";
import PhotoCard from "./photoCard/photoCard";
import "./App.css";
import styled from "styled-components";

function App() {
  const Head = styled.header`background-color: #8C8AA8; padding-top: 30px; padding-bottom: 30px;`;
  const MainDiv = styled.div`background-color: #3C3C5A; text-align: center;`;
  const Foot = styled.footer`background-color: #775C79; padding-top: 30px; padding-bottom: 30px;`;

  return (
    <MainDiv>
      <Head>
        <h1>NASA Photo of the Day</h1>
      </Head>
      <div>
        <PhotoCard />
      </div>
      <Foot>
        <p>Domesticdingo 2019</p>
      </Foot>
    </MainDiv>
  );
}

export default App;
