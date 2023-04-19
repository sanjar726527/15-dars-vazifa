import React, { useContext } from "react";
import { SlBasket } from "react-icons/sl";
import { useSelector } from "react-redux";
import { Context } from "../../../context/context";
import BasketWrapper from "./BasketWrapper";

export const Basket = () => {
  const [setModal] = useContext(Context);
  const basket = useSelector((product) => product);
  const result = basket.reduce((a, b) => a + b.qty, 0);
  const totalPrice = basket.reduce((a, b) => a + b.qty * b.price, 0);

  return (
    <>
      {basket.length > 0 && (
        <BasketWrapper>
          <div className="basket-row shadow">
            <div className="productPrice">
              <span>
                Your basket have <b>{result} product</b> on price
                <b>{totalPrice} sum</b>
              </span>
            </div>
            <div className="basketButton" onClick={() => setModal(false)}>
              <div className="basketIcon">
                <SlBasket />
                <span>Basket</span>
              </div>
            </div>
          </div>
        </BasketWrapper>
      )}
    </>
  );
};
