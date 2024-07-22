import { useAppSelector } from "../../app/Hooks";
import { selectCartItems } from "./cartSlice";
import { Typography } from "@mui/material";

const CartList = () => {
  const items = useAppSelector(selectCartItems);

  return (
    <>
      {items && items.length > 0 ? (
        items.map((cartItem) => (
          <Typography variant="h3">{cartItem.item.name}</Typography>
        ))
      ) : (
        <Typography variant="h3">Select something!</Typography>
      )}
    </>
  );
};

export default CartList;
