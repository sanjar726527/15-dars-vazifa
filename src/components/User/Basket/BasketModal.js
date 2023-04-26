import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const BasketModal = () => {
  const modal = useSelector((product) => product.modal);
  const productsBasket = useSelector((state) => state.productsBasket);
  const dispatch = useDispatch();

  console.log(modal);
  // const onAdd = (e) => {
  //   const exist = productsBasket.find((p) => p.id === e.id);
  //   if (exist) {
  //     const newProducts = productsBasket.map((p) =>
  //       p.id === e.id ? { ...exist, qty: exist.qty + 1 } : p
  //     );
  //     dispatch({ type: "ADD_PRODUCT_BASKET", payload: newProducts });
  //   }
  // };
  // const onRemove = (e) => {
  //   const exist = productsBasket.find((p) => p.id === e.id);
  //   if (exist.qty === 1) {
  //     const newProducts = productsBasket.filter((p) => p.id !== e.id);
  //     setData(newProducts);
  //   } else {
  //     const newProducts = productsBasket.map((p) =>
  //       p.id === e.id ? { ...exist, qty: exist.qty - 1 } : p
  //     );
  //     setData(newProducts);
  //   }
  // };
  
  const offModal = () => {
    dispatch({ type: "OFF_MODAL", payload: false });
  };
  const onRemoveAll = () => {
    dispatch({ type: "ON_REMOVE_ALL", payload: false });
  };
  const totalPrice = productsBasket.reduce(
    (a, b) => a + b.qty * b.price + 1500,
    0
  );

  return (
    <>
      {modal ? (
        <div className="basketModal">
          <div className="container">
            <div className="modalCard">
              <div className="card-image">
                <img
                  src="https://www.thespruceeats.com/thmb/jSsI2w8FkyTDrJhQkYJ5d0HS2uE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/green-salad-recipe-ensalada-verde-3083556-hero-01-256ac7f4162b45e5a1f82a5234a0708c.jpg"
                  alt="image"
                />
                <span onClick={offModal} className="closer">
                  <AiOutlineCloseCircle size={25} fill="white" />
                </span>
              </div>
              <div className="card-title">
                <h3>Product</h3>
                <p>
                  Yegulik narxiga <b> 1500 so'm </b>konteyner qo'shiladi
                </p>
                <h4>Quantity</h4>
                <div className="quantity">
                  {productsBasket.map((product, index) => {
                    return (
                      <table key={product.id} className="table">
                        <tbody>
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{product.title}</td>
                            <td>
                              <b>{product.price}</b>
                            </td>
                            <td className="text-end">
                              <button
                                className="btn btn-outline-success me-1"
                                onClick={() => "onAdd(product)"}
                              >
                                +
                              </button>
                              {product.qty}
                              <button
                                className="btn btn-outline-danger ms-1"
                                onClick={() => "onRemove(product)"}
                              >
                                -
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    );
                  })}
                </div>
                <div className="modal-price my-2 text-start">
                  <b className="text-end">Total price: {totalPrice} sum</b>
                </div>
                <div className="container d-flex justify-content-between">
                  <Link
                    onClick={offModal}
                    to={"/basket"}
                    className="btn btn-success add"
                  >
                    Add
                  </Link>
                  <Link
                    onClick={onRemoveAll}
                    to={"/user/home"}
                    className="btn btn-danger add"
                  >
                    Remove All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
};
