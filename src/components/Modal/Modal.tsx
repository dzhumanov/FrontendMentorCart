import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import DoneIcon from "@mui/icons-material/Done";
import { TransitionProps } from "@mui/material/transitions";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import {
  emptyCart,
  selectCartItems,
  selectModalStatus,
  toggleModal,
} from "../Cart/cartSlice";
import { Box, Typography } from "@mui/material";
import ModalItem from "./ModalItem";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectModalStatus);
  const items = useAppSelector(selectCartItems);

  const onClose = () => {
    dispatch(emptyCart());
    dispatch(toggleModal());
  };

  const total = items.reduce((acc, item) => {
    return acc + item.amount * item.item.price;
  }, 0);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => dispatch(toggleModal())}
        PaperProps={{
          style: {
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "16px",
            width: "100%",
          },
        }}
      >
        <DialogContent>
          <Box component="div">
            <DoneIcon
              sx={{
                fill: "green",
                border: "3px solid green",
                borderRadius: "50%",
                fontSize: 40,
              }}
            />
            <Typography variant="h4" fontWeight="700" sx={{ mt: 3 }}>
              Order Confirmed
            </Typography>
            <Typography variant="body2" sx={{ mb: 6, mt: 2 }}>
              We hope you enjoy your food!
            </Typography>
            <>
              {items.map((item) => (
                <ModalItem
                  id={item.item.id}
                  name={item.item.name}
                  price={item.item.price}
                  amount={item.amount}
                  image={item.item.image}
                />
              ))}
            </>
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
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              width: "100%",
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
            Start New Order
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Modal;
