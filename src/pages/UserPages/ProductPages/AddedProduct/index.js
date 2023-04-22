import React from "react";

import { ProductCard } from "../../../../components/User/ProductsCard";
import { useSelector } from "react-redux";

export const AddedProduct = () => {
  const products = useSelector((product) => product.allProducts);

  const product = products.filter(
    (product) => product.type !== "salads" || "soups" || "drinks"
  );
  return (
    <div className="productCard py-3">
      <h1>New Add Products</h1>
      <ProductCard product={product} />
    </div>
  );
};
