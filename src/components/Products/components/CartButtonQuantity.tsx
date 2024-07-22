import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {  useAppSelector } from "../../../app/Hooks";
import { selectCartItems } from "../../Cart/cartSlice";

interface Props {
  onMinus: () => void;
  onAdd: () => void;
  onDecrease: () => void;
  id: string;
}

const CartButtonQuantity: React.FC<Props> = ({
  onMinus,
  onAdd,
  onDecrease,
  id,
}) => {
  const items = useAppSelector(selectCartItems);
  const cartItem = items.find((item) => item.item.id === id);
  const [state, setState] = useState<number | null>(null);

  useEffect(() => {
    if (cartItem) {
      setState(cartItem.amount);
    } else {
      setState(0);
      onMinus();
    }
  }, [cartItem]);

  const increaseQuantity = () => {
    onAdd();
  };

  const decreaseQuantity = () => {
    if (!state) {
      return;
    }
    if (state > 1) {
      onDecrease();
    } else {
      onDecrease();
      onMinus();
    }
  };

  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "160px",
        height: "40px",
        border: "1px solid red",
        borderRadius: "20px",
        position: "absolute",
        bottom: "-5%",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "white",
        textAlign: "center",
        bgcolor: "#C83B0E",
        color: "white",
      }}
    >
      <RemoveIcon
        onClick={() => decreaseQuantity()}
        sx={{
          border: "1px solid white",
          borderRadius: "50%",
          cursor: "pointer",
          ":hover": {
            bgcolor: "white",
            fill: "red",
          },
        }}
      />
      <Typography variant="body1" fontWeight={600} sx={{ width: "30px" }}>
        {state}
      </Typography>
      <AddIcon
        onClick={() => increaseQuantity()}
        sx={{
          border: "1px solid white",
          borderRadius: "50%",
          cursor: "pointer",
          ":hover": {
            bgcolor: "white",
            fill: "red",
          },
        }}
      />
    </Box>
  );
};

export default CartButtonQuantity;
