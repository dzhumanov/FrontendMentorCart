import { Box, Grid, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  name: string;
  price: number;
  amount: number;
}

const CartItem: React.FC<Props> = ({ name, price, amount }) => {
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
                @ ${price}
              </Typography>
              <Typography variant="body2" sx={{ ml: 2 }}>
                ${price}
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
            <Box component="div" sx={{ width: "20px", height: "auto", mt: 1 }}>
              <CloseIcon
                sx={{
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
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
