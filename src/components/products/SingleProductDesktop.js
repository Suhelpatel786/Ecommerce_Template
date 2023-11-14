import { Stack } from "@mui/material";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/products";
import ProductMeta from "./productMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useState } from "react";
import ProductDetails from "../productDetails";

export default function SingleProductDesktop({ matches, product }) {
  const [openModal, setOpenModal] = useState(false);
  const [showOption, setshowOption] = useState(false);
  const handleMouseEnter = () => {
    setshowOption(true);
  };
  const handleMouseLeave = () => {
    setshowOption(false);
  };

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product?.image} />
        <ProductFavButton isfav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {showOption && (
          <ProductAddToCart show={showOption} variant="contained">
            Add To Cart
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOption}>
          <Stack direction={"column"}>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="primary" onClick={handleModal} />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />

      <ProductDetails
        open={openModal}
        product={product}
        onClose={handleCloseModal}
      />
    </>
  );
}
