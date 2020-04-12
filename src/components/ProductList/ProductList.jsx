import React from "react";
import { Box } from "@material-ui/core";

import ProductItem from "../ProductItem/ProductItem";

import productImg0 from "@/assets/img/products/product-0.png";
import productImg1 from "@/assets/img/products/product-1.png";
import productImg2 from "@/assets/img/products/product-2.png";
import providerImg0 from "@/assets/img/providers/provider-0.png";
import providerImg1 from "@/assets/img/providers/provider-1.png";
import providerImg2 from "@/assets/img/providers/provider-2.png";

// const useStyles = makeStyles(({}) => ({}));

const ProductList = () => {
  return (
    <Box>
      <ProductItem
        img={productImg0}
        title="Some Title"
        text="Вид грунтовки: акриловая • Назначение: для внутренних работ • Применение: по минеральным"
        price={8000}
        provider={providerImg0}
      />
      <ProductItem
        img={productImg1}
        title="Some Title"
        text="Вид грунтовки: акриловая • Назначение: для внутренних работ • Применение: по минеральным"
        price={8000}
        provider={providerImg1}
      />
      <ProductItem
        img={productImg2}
        title="Some Title"
        text="Вид грунтовки: акриловая • Назначение: для внутренних работ • Применение: по минеральным"
        price={8000}
        provider={providerImg2}
      />
    </Box>
  );
};

export default ProductList;
