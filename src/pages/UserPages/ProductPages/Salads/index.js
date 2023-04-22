import React from "react";

import { ProductCard } from "../../../../components/User/ProductsCard";
import { useSelector } from "react-redux";

export const Salads = () => {
  const products = useSelector((product) => product.allProducts);

  const product = products.filter((product) => product.type === "salads");
  return (
    <div className="productCard py-3">
      <h1>Salads</h1>
      <ProductCard product={product} />
    </div>
  );
};
