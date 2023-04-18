import React from "react";
import products from "./../../../../data/products";
import { ProductCard } from "../../../../components/User/ProductsCard";

export const Drinks = () => {
  const product = products.filter((product) => product.type === "drinks");
  
  return (
    <div className="productCard py-3">
      <h1>Drinks</h1>
      <ProductCard product={product} />
    </div>
  );
};
