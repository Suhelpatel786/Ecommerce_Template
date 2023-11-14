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
import useDailogModal from "../../hooks/useDailogModal";
import ProductDetails from "../productDetails";

export default function SingleProduct({ matches, product, handelModal }) {
  // const [
  //   ProductDetailDailog,
  //   ShowProductDetailDailog,
  //   closeProductDetailDailog,
  // ] = useDailogModal(ProductDetails);

  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <Product>
        <ProductImage src={product?.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction={"row"}>
            <ProductFavButton isfav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={handleModal}>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>

      <ProductAddToCart variant="contained">Add To Cart</ProductAddToCart>
      {/* <ProductDetailDailog product={product} /> */}
      <ProductDetails
        open={openModal}
        product={product}
        onClose={handleCloseModal}
      />
    </>
  );
}
