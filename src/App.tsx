import { Container, GlobalStyles, Grid } from "@mui/material";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
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
