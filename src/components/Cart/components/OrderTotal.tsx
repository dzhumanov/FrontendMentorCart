import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../app/Hooks";
import { selectCartItems, toggleModal } from "../cartSlice";

const OrderTotal = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);

  const toggle = () => {
    if (items && items.length > 0) {
      dispatch(toggleModal());
    } else alert("0 items");
  };

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
        onClick={toggle}
        sx={{
          fontWeight: "600",
          bgcolor: "red",
          borderRadius: "25px",
          py: 2,
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
