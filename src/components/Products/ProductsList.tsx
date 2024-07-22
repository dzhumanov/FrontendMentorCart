import { Grid } from "@mui/material";
import Product from "./Product";

const ProductsList = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Product />
      </Grid>
      <Grid item xs={4}>
        <Product />
      </Grid>
      <Grid item xs={4}>
        <Product />
      </Grid>
      <Grid item xs={4}>
        <Product />
      </Grid>
    </Grid>
  );
};

export default ProductsList;
