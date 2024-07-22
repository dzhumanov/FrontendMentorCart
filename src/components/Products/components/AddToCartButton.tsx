import { Box, Typography } from "@mui/material";
import CartIcon from "../../Icons/CartIcon";
import { RED } from "../../../constants";

interface Props {
  onClick: () => void;
}

const AddToCartButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Box
      component={"div"}
      onClick={onClick}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "160px",
        height: "40px",
        border: `1px solid ${RED}`,
        borderRadius: "20px",
        position: "absolute",
        bottom: "-5%",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "white",
        textAlign: "center",
        cursor: "pointer",
        ":hover": {
          color: RED,
        },
      }}
    >
      <CartIcon />
      <Typography variant="body1" fontWeight={600}>
        Add to Cart
      </Typography>
    </Box>
  );
};

export default AddToCartButton;
