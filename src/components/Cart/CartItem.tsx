import { Box, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../app/Hooks";
import { deleteFromCart } from "./cartSlice";

interface Props {
  id: string;
  name: string;
  price: number;
  amount: number;
}

const CartItem: React.FC<Props> = ({ id, name, price, amount }) => {
  const dispatch = useAppDispatch();

  const deleteItemFromCart = () => {
    dispatch(deleteFromCart(id));
  };

  return (
    <Box component="div" sx={{ borderBottom: "1px solid red", mt: 3 }}>
      <Grid container>
        <Grid item xs={10}>
          <Box component="div">
            <Typography variant="body1" fontWeight={600}>
              {name}
            </Typography>
            <Box component="div" sx={{ display: "flex" }}>
              <Typography variant="body1" fontWeight={600}>
                {amount} x
              </Typography>
              <Typography variant="body2" sx={{ ml: 3 }}>
                @ ${price.toFixed(2)}
              </Typography>
              <Typography variant="body2" sx={{ ml: 2 }}>
                ${(price * amount).toFixed(2)}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box component="div" sx={{ width: "20px", height: "20px", mt: 1 }}>
              <CloseIcon
                onClick={deleteItemFromCart}
                sx={{
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                  ":hover": {
                    border: "0",
                    outline: "2px solid black",
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartItem;
