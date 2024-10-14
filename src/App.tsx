import { Box, Container, Grid2 } from "@mui/material";
import db from "./db.json";
import { useEffect, useState } from "react";
import { Item } from "./types";

function App() {
  const [state, setState] = useState<Item[]>([]);

  useEffect(() => {
    const newItems = shuffle(db);
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
    <Container maxWidth={"lg"}>
      <Grid2 container spacing={2}>
        {state.map((item) => (
          <Grid2 size={3} key={item.id}>
            <Box
              component={"img"}
              src={item.img}
              alt={item.name}
              sx={{ width: "100%", heigth: "auto" }}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}

export default App;
