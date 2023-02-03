import React from "react";

const Legend = () => {
  //     “Blank”: {“Health”: 0, “Moves”: -1},
  // “Speeder”: {“Health”: -5, “Moves”: 0},
  // “Lava”: {“Health”: -50, “Moves”: -10},
  // “Mud”: {“Health”: -10, “Moves”: -5},
  return (
    <div>
      <h3>LEGEND:</h3>
      <div style={{ display: "flex" }}>
        <span>
          <div
            style={{
              width: "30px",
              height: "20px",
              borderRadius: "5px",
              backgroundColor: "brown",
              border: "solid 2px black",
            }}
          />
          <h3>Mud:</h3>
          <p>health = -10</p>
          <p>moves = -5</p>
        </span>
        <hr />
        <span>
          <div
            style={{
              width: "30px",
              height: "20px",
              borderRadius: "5px",
              backgroundColor: "red",
              border: "solid 2px black",
            }}
          />
          <h3>Lava:</h3>
          <p>health = -50</p>
          <p>moves = -10</p>
        </span>
        <hr />
        <span>
          <div
            style={{
              width: "30px",
              height: "20px",
              borderRadius: "5px",
              backgroundColor: "green",
              border: "solid 2px black",
            }}
          />
          <h3>Speeder:</h3>
          <p>health = -5</p>
          <p>moves = 0</p>
        </span>
        <hr />
        <span>
          <div
            style={{
              width: "30px",
              height: "20px",
              borderRadius: "5px",
              backgroundColor: "white",
              border: "solid 2px black",
            }}
          />
          <h3>Blank:</h3>
          <p>health = 0</p>
          <p>moves = -1</p>
        </span>
      </div>
    </div>
  );
};

export default Legend;
