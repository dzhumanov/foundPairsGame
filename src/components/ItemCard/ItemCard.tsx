import { Box, Grid2 } from "@mui/material";
import { Item } from "../../types";
import { useState } from "react";

interface Props {
  item: Item;
}

const ItemCard: React.FC<Props> = ({ item }) => {
  const [isFlip, setIsFlip] = useState<boolean>(false);

  const flipCard = () => {
    setIsFlip(!isFlip);
  };

  return (
    <Grid2 size={3} className="scene">
      <Box onClick={flipCard} className={`item ${isFlip ? "is-flipped" : ""}`}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: "url(src/assets/images/hidden.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "30px",
          }}
          className="item__face item__face--front"
        ></Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="item__face item__face--back"
        >
          <Box
            component={"img"}
            src={item.img}
            alt={item.name}
            sx={{ width: "100%", heigth: "auto" }}
          />
        </Box>
      </Box>
    </Grid2>
  );
};

export default ItemCard;
