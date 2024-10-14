import { Box, Button, Container, Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Item } from "./types";
import ItemCard from "./components/ItemCard/ItemCard";
import { newGame } from "./helpers/newGame/newGame";

function App() {
  const [state, setState] = useState<Item[]>([]);
  const [activeCards, setActiveCards] = useState<number[]>([]);
  const [foundMatches, setFoundMatches] = useState<Item[]>([]);
  const [won, setWon] = useState<boolean>(false);
  const [tries, setTries] = useState<number>(0);

  useEffect(() => {
    newGame(setState, setActiveCards, setFoundMatches, setWon, setTries);
  }, []);

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
    <Container sx={{ width: "750px" }}>
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
        <>
          <Typography variant="h2" sx={{ textAlign: "center", color: "green" }}>
            You won!
          </Typography>
          <Button
            variant="contained"
            onClick={() =>
              newGame(
                setState,
                setActiveCards,
                setFoundMatches,
                setWon,
                setTries
              )
            }
            sx={{ my: 2, textAlign: "center", display: "block", mx: "auto" }}
            color="success"
          >
            New game
          </Button>
        </>
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
