import { Grid } from "@mui/material";
import Product from "./Product";
import { useAppSelector } from "../../app/Hooks";
import { selectProducts } from "./ProductsSlice";

const ProductsList = () => {
  const products = useAppSelector(selectProducts);

  return (
    <Grid container spacing={2}>
      {products.map((item, index) => (
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
