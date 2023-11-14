import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { Product, ProductImage } from "../../styles/products";
import { useState } from "react";
import { darken, lighten } from "polished";

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
}));

export default function ProductDetails({ open, onClose, product }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [productCount, setproductCount] = useState(1);

  const handleProductQTYIncrement = () => {
    productCount <= 4 && setproductCount(productCount + 1);
  };

  const handleProductQTYDecrement = () => {
    productCount >= 2 && setproductCount(productCount - 1);
  };
  return (
    <Dialog
      TransitionComponent={SlideTransition}
      open={open}
      fullScreen
      variant="permanant"
    >
      <DialogTitle
        sx={{
          background: Colors.secondary,
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* {product?.title} */}
          Product Title
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper flexDirection={matches ? "column" : "row"}>
          <Product sx={{ marginRight: 4 }}>
            <ProductImage src={product?.image} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant="subtitle1">SKU 123</Typography>
            <Typography variant="subtitle1">
              Availability : 5 in Stock
            </Typography>
            <Typography sx={{ lineHeight: 2 }} variant="h4">
              {product?.name}
            </Typography>
            <Typography variant="body1">
              {matches
                ? product.description + product.description
                : product.description +
                  product.description +
                  product.description}
            </Typography>

            <Box
              mt={2}
              display={"flex"}
              justifyContent={matches ? "start" : "space-between"}
              alignItems={"center"}
            >
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: matches ? "14px" : "18px",
                    mr: "10px",
                    borderRadius: 0,
                    backgroundColor: `${Colors.secondary}`,
                    "&:hover": {
                      backgroundColor: darken(0.2, `${Colors.secondary}`),
                    },
                  }}
                  onClick={handleProductQTYIncrement}
                >
                  +
                </Button>
                {productCount}
                <Button
                  variant="contained"
                  sx={{
                    fontSize: matches ? "14px" : "18px",
                    ml: "10px",
                    borderRadius: 0,
                    backgroundColor: `${Colors.secondary}`,
                    "&:hover": {
                      backgroundColor: darken(0.2, `${Colors.secondary}`),
                    },
                  }}
                  onClick={handleProductQTYDecrement}
                >
                  -
                </Button>
              </Box>
              {!matches && (
                <Box>
                  <Button variant="contained" sx={{ borderRadius: "0" }}>
                    Add To Cart
                  </Button>
                </Box>
              )}
            </Box>

            {matches && (
              <Box
                mt={2}
                display={"flex"}
                justifyContent={"start"}
                alignItems={"center"}
              >
                <Button variant="contained" sx={{ borderRadius: "0" }}>
                  Add To Cart
                </Button>
              </Box>
            )}
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}
