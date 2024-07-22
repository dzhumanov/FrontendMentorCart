import { Typography } from "@mui/material";
import CartList from "./CartList";

const Cart = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mt: "20px", color: "red" }}
      >
        Your Cart
      </Typography>
      <CartList />
    </>
  );
};

export default Cart;
