import { Typography } from "@mui/material";
import ProductsList from "./ProductsList";

const Products = () => {
  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>
        Desserts
      </Typography>
      <ProductsList />
    </>
  );
};

export default Products;
