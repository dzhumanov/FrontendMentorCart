import { Container, Grid } from "@mui/material";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid item xs={9}>
            <Products />
          </Grid>
          <Grid item xs={3}>
            <Cart />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
