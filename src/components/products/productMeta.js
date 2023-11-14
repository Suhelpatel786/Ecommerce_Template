import { Typography } from "@mui/material";
import { ProductMetaWrapper } from "../../styles/products";

export default function ProductMeta({ matches, product }) {
  return (
    <ProductMetaWrapper>
      <Typography variant={matches ? "body1" : "h5"} lineHeight={2}>
        {product.name}
      </Typography>
      <Typography variant={matches ? "caption" : "body1"}>
        ${product.price}
      </Typography>
    </ProductMetaWrapper>
  );
}
