import { Box, Button, Typography } from "@mui/material";
import { useAppSelector } from "../../../app/Hooks";
import { selectCartItems } from "../cartSlice";

const OrderTotal = () => {
  const items = useAppSelector(selectCartItems);

  const total = items.reduce((acc, item) => {
    return acc + item.amount * item.item.price;
  }, 0);

  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography variant="body1">Order Total</Typography>
        <Typography variant="h6" fontWeight={700}>
          ${total.toFixed(2)}
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          bgcolor: "red",
          borderRadius: "20px",
          py: 1,
          mt: 3,
          ":hover": {
            bgcolor: "#952C0C",
          },
        }}
      >
        Confirm order
      </Button>
    </>
  );
};

export default OrderTotal;
