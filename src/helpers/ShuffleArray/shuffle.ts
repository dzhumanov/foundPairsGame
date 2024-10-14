import { Item } from "../../types";

export const shuffle = (array: Item[]) => {
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
