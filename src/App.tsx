import { Box, Container, Grid2, Typography } from "@mui/material";
import db from "./db.json";
import { useEffect, useState } from "react";
import { Item } from "./types";
import ItemCard from "./components/ItemCard/ItemCard";
import { shuffle } from "./helpers/ShuffleArray/shuffle";

function App() {
  const [state, setState] = useState<Item[]>([]);
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const [foundMatches, setFoundMatches] = useState<Item[]>([]);
  const [won, setWon] = useState<boolean>(false);
  const [tries, setTries] = useState<number>(0);

  useEffect(() => {
    const newArray = [...db, ...db];
    const newItems = shuffle(newArray);
    setState(newItems);
  }, []);

  useEffect(() => {
    console.log(foundMatches);
  }, [foundMatches]);

  const flipCard = (item: Item, index: number) => {
    if (activeCards.length === 0) {
      setActiveCards([index]);
    } else if (activeCards.length === 1) {
      setActiveCards((prevState) => [...prevState, index]);
      setTries((prevState) => prevState + 1);

      if (state[activeCards[0]].name === item.name) {
        const newFoundMatches = [...foundMatches, state[activeCards[0]]];
        setFoundMatches(newFoundMatches);
        setActiveCards([]);

        if (newFoundMatches.length === state.length / 2) {
          setWon(true);
        }
      } else {
        setTimeout(() => setActiveCards([]), 1000);
      }
    }
  };

  return (
    <Container maxWidth={"md"}>
      <Grid2 container spacing={2}>
        {state.map((item, index) => (
          <ItemCard
            item={item}
            activeCard={activeCards.includes(index)}
            guessed={foundMatches.includes(item)}
            onClick={() => flipCard(item, index)}
            key={index}
          />
        ))}
      </Grid2>
      {won && (
        <Typography variant="h2" sx={{ textAlign: "center", color: "green" }}>
          You won!
        </Typography>
      )}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h2" sx={{ textAlign: "center", color: "white" }}>
          Tries: {tries}
        </Typography>
        <Typography variant="h2" sx={{ textAlign: "center", color: "white" }}>
          Found pairs: {foundMatches.length}
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
