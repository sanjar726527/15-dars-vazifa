import React from "react";

import { Drinks } from "../Drinks";
import { Salads } from "../Salads";
import { Soups } from "../Soups";
import { AddedProduct } from "../AddedProduct";

export const AllProducts = () => {
  return (
    <div>
      <Salads />
      <Soups />
      <Drinks />
      <AddedProduct />
    </div>
  );
};
