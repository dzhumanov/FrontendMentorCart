import { Container, Grid } from "@mui/material";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Products/>
        <Cart/>
      </Container>
    </>
  );
}

export default App;
