import { Box, Typography } from "@mui/material";
import AddToCartButton from "./components/AddToCartButton";
import { useState } from "react";
import CartButtonQuantity from "./components/CartButtonQuantity";

interface Props {
  name: string;
  category: string;
  price: number;
  image: string;
}

const Product: React.FC<Props> = ({ name, category, price, image }) => {
  const [btnStatus, setBtnStatus] = useState<boolean>(false);

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
          <CartButtonQuantity onMinus={() => setBtnStatus(false)} />
        ) : (
          <AddToCartButton onClick={() => setBtnStatus(true)} />
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
