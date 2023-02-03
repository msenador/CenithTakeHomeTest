import React from "react";

const UserInfo = (props) => {
  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <h2>HEALTH: {props.health}</h2>
        <h2>MOVES: {props.moves}</h2>
      </div>
      <div color="red">*User position is indicated by 'YOU' inside block</div>
      <hr />
    </div>
  );
};

export default UserInfo;
