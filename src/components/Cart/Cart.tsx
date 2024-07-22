import { Box, Typography } from "@mui/material";
import CartList from "./CartList";
import OrderTotal from "./components/OrderTotal";
import Modal from "../Modal/Modal";

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
      <Modal />
    </Box>
  );
};

export default Cart;
