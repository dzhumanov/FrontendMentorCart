import { Box, Typography } from "@mui/material";
import CartList from "./CartList";

const Cart = () => {
  return (
    <Box
      component="div"
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mt: "20px", color: "red" }}
      >
        Your Cart
      </Typography>
      <CartList />
    </Box>
  );
};

export default Cart;
