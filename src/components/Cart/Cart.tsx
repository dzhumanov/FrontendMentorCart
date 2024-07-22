import { Box, Typography } from "@mui/material";
import CartList from "./CartList";
import OrderTotal from "./components/OrderTotal";
import Modal from "../Modal/Modal";
import { RED } from "../../constants";
import { useAppSelector } from "../../app/Hooks";
import { selectCartItems } from "./cartSlice";

const Cart = () => {
  const items = useAppSelector(selectCartItems);
  const total = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <Box component="div" sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mt: "20px", color: RED }}
      >
        Your Cart ({total})
      </Typography>
      <CartList />
      <OrderTotal />
      <Modal />
    </Box>
  );
};

export default Cart;
