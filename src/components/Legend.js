import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const MudBlock = styled.div`
  width: 30px;
  height: 20px;
  border-radius: 5px;
  background-color: brown;
  border: solid 2px black;
`;

const LavaBlock = styled.div`
  width: 30px;
  height: 20px;
  border-radius: 5px;
  background-color: red;
  border: solid 2px black;
`;

const SpeederBlock = styled.div`
  width: 30px;
  height: 20px;
  border-radius: 5px;
  background-color: green;
  border: solid 2px black;
`;

const BlankBlock = styled.div`
  width: 30px;
  height: 20px;
  border-radius: 5px;
  background-color: white;
  border: solid 2px black;
`;

const Legend = () => {
  return (
    <div>
      <h3>LEGEND:</h3>
      <Container>
        <span>
          <MudBlock />
          <h3>Mud:</h3>
          <p>health = -10</p>
          <p>moves = -5</p>
        </span>
        <hr />
        <span>
          <LavaBlock />
          <h3>Lava:</h3>
          <p>health = -50</p>
          <p>moves = -10</p>
        </span>
        <hr />
        <span>
          <SpeederBlock />
          <h3>Speeder:</h3>
          <p>health = -5</p>
          <p>moves = 0</p>
        </span>
        <hr />
        <span>
          <BlankBlock />
          <h3>Blank:</h3>
          <p>health = 0</p>
          <p>moves = -1</p>
        </span>
      </Container>
    </div>
  );
};

export default Legend;
