import { Box, Grid2 } from "@mui/material";
import { Item } from "../../types";

interface Props {
  item: Item;
  activeCard: boolean;
  onClick: () => void;
  guessed: boolean;
}

const ItemCard: React.FC<Props> = ({ item, activeCard, onClick, guessed }) => {
  return (
    <Grid2 size={3} className={`scene`} sx={{height: "calc(750px / 4)"}}>
      <Box
        onClick={!guessed ? onClick : undefined}
        sx={{ width: "100%", height: "100%" }}
        className={`item ${activeCard || guessed ? "is-flipped" : ""} 
        `}
      >
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
            backgroundColor: "#1E1E1E",
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
            sx={{ maxWidth: "100%" }}
          />
        </Box>
      </Box>
    </Grid2>
  );
};

export default ItemCard;
