import { Box, Typography } from "@mui/material";
import data from "../../data/data.json";
import AddToCartButton from "./components/AddToCartButton";

const Product = () => {
  const image = data[0].image;
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
          src={image.desktop}
          alt={data[0].name}
        />
        <AddToCartButton />
      </Box>
      <Typography variant="body1" sx={{ mt: 5 }}>
        {data[0].category}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: "700" }}>
        {data[0].name}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "600", color: "red" }}>
        ${data[0].price}
      </Typography>
    </Box>
  );
};

export default Product;
