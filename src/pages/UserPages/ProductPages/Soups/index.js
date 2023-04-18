import React from "react";
import { ProductCard } from "../../../../components/User/ProductsCard";
import products from "./../../../../data/products";

export const Soups = () => {
  const product = products.filter((product) => product.type === "soups");
  return (
    <div className="productCard py-3">
      <h1>Soups</h1>
      <ProductCard product={product} />
    </div>
  );
};
