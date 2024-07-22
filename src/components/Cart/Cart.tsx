import { Box, Typography } from "@mui/material";
import CartList from "./CartList";
import OrderTotal from "./components/OrderTotal";

const Cart = () => {
  return (
    <Box component="div" sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mt: "20px", color: "red" }}
      >
        Your Cart
      </Typography>
      <CartList />
      <OrderTotal />
    </Box>
  );
};

export default Cart;
