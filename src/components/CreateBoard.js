import React, { useEffect, useState, useContext } from "react";
import Grid from "@react-css/grid";
import { gridBlocks } from "../models/gridBlocks";
import UserContext from "../context/userContext";
import { BeatLoader } from "react-spinners";

const CreateBoard = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const userValue = useContext(UserContext);

  useEffect(() => {
    initialCreation();
  }, []);

  const initialCreation = () => {
    let boardLayoutArray = [];

    if (props.boardLayout.length > 0) {
      console.log(userValue);
      console.log(props.boardLayout);
      setIsLoading(false);
      return;
    }
    for (let i = 0; i < 10000; i++) {
      let randomTile =
        gridBlocks[Math.floor(Math.random() * gridBlocks.length)];
      if (i === userValue.tileNumber) {
        boardLayoutArray.push({
          tileNumber: i,
          tileDetails: { ...randomTile, selected: true },
        });
      } else {
        boardLayoutArray.push({ tileNumber: i, tileDetails: randomTile });
      }
    }
    props.setBoardLayout(boardLayoutArray);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <div>
          <h1>loading board...</h1>
          <BeatLoader color="#36d7b7" />
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(100, 1fr)",
            gridTemplateRows: "repeat(100, 1fr)",
            gap: "2px",
          }}
        >
          {props.boardLayout.map((tile) => (
            <Grid
              style={{
                borderStyle: "solid",
                borderRadius: "5px",
                backgroundColor: tile.tileDetails.color,
                width: "35px",
              }}
              key={tile.tileNumber}
            >
              {tile.tileNumber === userValue.tileNumber ? "YOU" : ""}
            </Grid>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreateBoard;
