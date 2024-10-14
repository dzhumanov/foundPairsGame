import db from "../../db.json";
import { Item } from "../../types";
import { shuffle } from "../ShuffleArray/shuffle";

export const newGame = (
  setState: React.Dispatch<React.SetStateAction<Item[]>>,
  setActiveCards: React.Dispatch<React.SetStateAction<number[]>>,
  setFoundMatches: React.Dispatch<React.SetStateAction<Item[]>>,
  setWon: React.Dispatch<React.SetStateAction<boolean>>,
  setTries: React.Dispatch<React.SetStateAction<number>>
) => {
  const newArray = [...db, ...db];
  const newItems = shuffle(newArray);
  setActiveCards([]);
  setFoundMatches([]);
  setWon(false);
  setTries(0);
  setTimeout(() => {
    setState(newItems);
  }, 1000);
};
