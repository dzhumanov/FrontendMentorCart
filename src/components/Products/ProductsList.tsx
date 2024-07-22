import { Grid } from "@mui/material";
import Product from "./Product";
import data from "../../data/data.json";

const ProductsList = () => {
  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Product
            id={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            image={item.image.desktop}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductsList;
