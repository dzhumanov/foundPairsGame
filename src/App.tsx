import {  Container, Grid2 } from "@mui/material";
import db from "./db.json";
import { useEffect, useState } from "react";
import { Item } from "./types";
import ItemCard from "./components/ItemCard/ItemCard";

function App() {
  const [state, setState] = useState<Item[]>([]);

  useEffect(() => {
    const newArray = [...db, ...db];
    const newItems = shuffle(newArray);
    setState(newItems);
  }, []);

  const shuffle = (array: Item[]) => {
    let temp;
    let randomNumber;
    for (let i = array.length - 1; i > 0; i--) {
      randomNumber = Math.floor(Math.random() * (i + 1));
      temp = array[randomNumber];
      array[randomNumber] = array[i];
      array[i] = temp;
    }
    return array;
  };

  return (
    <Container maxWidth={"md"}>
      <Grid2 container spacing={2}>
        {state.map((item, index) => (
          <ItemCard item={item} key={index} />
        ))}
      </Grid2>
    </Container>
  );
}

export default App;
