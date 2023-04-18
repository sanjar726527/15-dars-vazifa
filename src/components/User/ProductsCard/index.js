import React from "react";
import { useDispatch, useSelector } from "react-redux";


export const ProductCard = ({ product }) => {
  const basket = useSelector((product) => product);
  const dispatch = useDispatch();
  const onAdd = (e) => {
    dispatch({ type: "ADD_PRODUCT_BASKET", payload: e });
  };
  // const onRemove = (e) => {
  //   const exist = data.find((p) => p.id === e.id);
  //   if (exist.qty === 1) {
  //     const newProducts = data.filter((p) => p.id !== e.id);
  //     setData(newProducts);
  //   } else {
  //     const newProducts = data.map((p) =>
  //       p.id === e.id ? { ...exist, qty: exist.qty - 1 } : p
  //     );
  //     setData(newProducts);
  //   }
  // };

  return (
    <div className="card-row">
      {product.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.img} alt="image" />
          <span className="active">
            <button
              className="btn btn-warning"
              color="white"
              onClick={() => onAdd(item)}
            >
              Add card
            </button>
          </span>
          <h3>{item.title}</h3>
          <p>{item.price} sum</p>
        </div>
      ))}
    </div>
  );
};
