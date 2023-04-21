import React, { useContext } from "react";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { Context } from "../../../context/context";
import BasketWrapper from "./BasketWrapper";

export const Basket = () => {
  const productsBasket = useSelector((state) => state.productsBasket);
  const modal = useSelector((state) => state.modal);
  const result = productsBasket.reduce((a, b) => a + b.qty, 0);
  const totalPrice = productsBasket.reduce((a, b) => a + b.qty * b.price, 0);
  const dispatch = useDispatch();
  const onModal = () => {
    dispatch({ type: "ON_MODAL", payload: true });
  };
  console.log(result, totalPrice);

  return (
    <>
      {productsBasket.length > 0 && (
        <BasketWrapper>
          <div className="basket-row shadow">
            <div className="productPrice">
              <span>
                Your basket have <b>{result} product</b> on price
                <b>{totalPrice} sum</b>
              </span>
            </div>
            <div className="basketButton" onClick={onModal}>
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
