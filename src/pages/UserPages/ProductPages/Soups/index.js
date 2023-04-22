import React from "react";
import { ProductCard } from "../../../../components/User/ProductsCard";
import { useSelector } from "react-redux";

export const Soups = () => {
  const products = useSelector((product) => product.allProducts);

  const product = products.filter((product) => product.type === "soups");
  return (
    <div className="productCard py-3">
      <h1>Soups</h1>
      <ProductCard product={product} />
    </div>
  );
};
