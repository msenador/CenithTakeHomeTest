import { useState } from "react";
import CreateBoard from "./components/CreateBoard";
import styled from "styled-components";
import UserContext from "./context/userContext";
import { startingSpaces } from "./models/startingSpaces";
import topBorderSpaces from "./models/topBorder";
import bottomBorderSpaces from "./models/bottomBorder";
import Legend from "./components/Legend";
import UserInfo from "./components/UserInfo";

const Container = styled.div`
  padding: 100px;
`;

function App() {
  const [boardLayout, setBoardLayout] = useState([]);

  let randomStart =
    startingSpaces[Math.floor(Math.random() * startingSpaces.length)];

  const [userValue, setUserValue] = useState({
    tileDetails: {
      moves: 250,
      health: 100,
    },
    tileNumber: randomStart,
  });

  const move = (e) => {
    switch (e.key) {
      case "ArrowRight":
        moveRight();
        break;
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowUp":
        moveUp();
        break;
      case "ArrowDown":
        moveDown();
        break;
      default:
        alert("Error - Please use arrows to move(LEFT, RIGHT, UP, DOWN)");
        return;
    }
  };

  const moveRight = () => {
    checkLostGame(userValue);
    let tileToTheRight = boardLayout[userValue.tileNumber + 1];
    if (tileToTheRight.tileNumber.toString().includes("00")) {
      alert("CONGRATS! YOU SURVIVED. Refresh to try again");
      return;
    }

    setUserValue({
      tileDetails: {
        moves: userValue.tileDetails.moves + tileToTheRight.tileDetails.moves,
        health:
          userValue.tileDetails.health + tileToTheRight.tileDetails.health,
      },
      tileNumber: userValue.tileNumber + 1,
    });
  };

  const moveLeft = () => {
    checkLostGame(userValue);
    let tileToTheLeft = boardLayout[userValue.tileNumber - 1];
    if (tileToTheLeft.tileNumber.toString().includes("99")) {
      alert("Can't go that way homie");
      return;
    }

    setUserValue({
      tileDetails: {
        moves: userValue.tileDetails.moves + tileToTheLeft.tileDetails.moves,
        health: userValue.tileDetails.health + tileToTheLeft.tileDetails.health,
      },
      tileNumber: userValue.tileNumber - 1,
    });
  };

  // TODO: edge case for top border
  const moveUp = () => {
    checkLostGame(userValue);
    let tileAbove = boardLayout[userValue.tileNumber - 100];
    if (topBorderSpaces.includes(userValue.tileNumber)) {
      alert("Can't go that way homie");
      return;
    }

    setUserValue({
      tileDetails: {
        moves: userValue.tileDetails.moves + tileAbove.tileDetails.moves,
        health: userValue.tileDetails.health + tileAbove.tileDetails.health,
      },
      tileNumber: userValue.tileNumber - 100,
    });
  };

  const moveDown = () => {
    checkLostGame(userValue);
    let tileBelow = boardLayout[userValue.tileNumber + 100];
    if (bottomBorderSpaces.includes(userValue.tileNumber)) {
      alert("Can't go that way homie");
      return;
    }

    setUserValue({
      tileDetails: {
        moves: userValue.tileDetails.moves + tileBelow.tileDetails.moves,
        health: userValue.tileDetails.health + tileBelow.tileDetails.health,
      },
      tileNumber: userValue.tileNumber + 100,
    });
  };

  const checkLostGame = (user) => {
    if (user.tileDetails.moves < 1) {
      alert("Sorry, you've ran out of moves. Restarting the game now");
      // eslint-disable-next-line no-restricted-globals
      location.reload();
      return;
    } else if (user.tileDetails.health < 1) {
      alert("Sorry, you've ran out of health. Restarting the game now");
      // eslint-disable-next-line no-restricted-globals
      location.reload();
      return;
    }
  };

  return (
    <Container onKeyDown={(e) => move(e)} tabIndex={0}>
      <UserContext.Provider value={userValue}>
        <UserInfo
          health={userValue.tileDetails.health}
          moves={userValue.tileDetails.moves}
        />
        <Legend />

        <CreateBoard
          boardLayout={boardLayout}
          setBoardLayout={setBoardLayout}
        />
      </UserContext.Provider>
    </Container>
  );
}

export default App;
