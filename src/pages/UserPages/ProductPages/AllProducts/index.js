import React from "react";

import { Drinks } from "../Drinks";
import { Salads } from "../Salads";
import { Soups } from "../Soups";

export const AllProducts = () => {
  return (
    <div>
      <Salads />
      <Soups />
      <Drinks />
    </div>
  );
};
