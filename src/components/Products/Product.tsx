import { Box, Typography } from "@mui/material";
import AddToCartButton from "./components/AddToCartButton";
import { useState } from "react";
import CartButtonQuantity from "./components/CartButtonQuantity";
import { useAppDispatch } from "../../app/Hooks";
import { addToCart, decreaseAmount } from "../Cart/cartSlice";
import { Item } from "../../types";

interface Props {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

const Product: React.FC<Props> = ({ id, name, category, price, image }) => {
  const [btnStatus, setBtnStatus] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const addItemToCart = () => {
    const obj: Item = {
      id: id,
      name: name,
      category: category,
      price: price,
      image: image,
    };
    dispatch(addToCart(obj));
    setBtnStatus(true);
  };

  const decreaseItemFromCart = () => {
    const obj: Item = {
      id: id,
      name: name,
      category: category,
      price: price,
      image: image,
    };
    dispatch(decreaseAmount(obj));
  };

  return (
    <Box component={"div"} sx={{ display: "flex", flexDirection: "column" }}>
      <Box component={"div"} sx={{ position: "relative", width: "100%" }}>
        <Box
          component={"img"}
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "10%",
          }}
          src={image}
          alt={name}
        />
        {btnStatus ? (
          <CartButtonQuantity
            onMinus={() => setBtnStatus(false)}
            onAdd={addItemToCart}
            onDecrease={decreaseItemFromCart}
            id={id}
          />
        ) : (
          <AddToCartButton onClick={addItemToCart} />
        )}
      </Box>
      <Typography variant="body1" sx={{ mt: 5 }}>
        {category}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "700" }}>
        {name}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "600", color: "red" }}>
        ${price}
      </Typography>
    </Box>
  );
};

export default Product;
