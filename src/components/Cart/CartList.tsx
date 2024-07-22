import { useEffect } from "react";
import { useAppSelector } from "../../app/Hooks";
import EmptyCart from "../Icons/EmptyCart";
import CartItem from "./CartItem";
import { selectCartItems } from "./cartSlice";
import { Box, Typography } from "@mui/material";

const CartList = () => {
  const items = useAppSelector(selectCartItems);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <>
      {items && items.length > 0 ? (
        items.map((cartItem) => (
          <CartItem
            key={cartItem.item.id}
            id={cartItem.item.id}
            name={cartItem.item.name}
            price={cartItem.item.price}
            amount={cartItem.amount}
          />
        ))
      ) : (
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 3,
          }}
        >
          <EmptyCart />
          <Typography variant="body1">
            Your added items will appear here
          </Typography>
        </Box>
      )}
    </>
  );
};

export default CartList;
