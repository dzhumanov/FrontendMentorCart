import { Box, Grid, Typography } from "@mui/material";
import { RED } from "../../constants";

interface Props {
  id: string;
  name: string;
  price: number;
  amount: number;
  image: string;
}

const ModalItem: React.FC<Props> = ({ name, price, amount, image }) => {
  return (
    <Box component="div" sx={{ borderBottom: `1px solid ${RED}`, pb: 1, mb:1 }}>
      <Grid container>
        <Grid item xs={2}>
          <Box
            component="div"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="img"
              src={image}
              sx={{ width: "50px", height: "auto", borderRadius: "5px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={8}>
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
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Typography variant="body1" fontWeight={700}>
              ${(price * amount).toFixed(2)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ModalItem;
