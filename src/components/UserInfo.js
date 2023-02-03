import React from "react";

const UserInfo = (props) => {
  return (
    <div>
      <h1>User Info</h1>
      <h2>HEALTH: {props.health}</h2>
      <h2>MOVES: {props.moves}</h2>
      <div color="red">*User position is indicated by 'YOU' inside block</div>
      <hr />
    </div>
  );
};

export default UserInfo;
