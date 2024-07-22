import { Box, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface Props {
  onMinus: () => void;
}

const CartButtonQuantity: React.FC<Props> = ({ onMinus }) => {
  const [state, setState] = useState<number>(1);

  const increaseQuantity = () => {
    setState((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (state > 1) {
      setState((prev) => prev - 1);
    } else {
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
