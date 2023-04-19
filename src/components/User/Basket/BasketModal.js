import React from "react";
import { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Context } from "../../../context/context";
import { useSelector } from "react-redux";

export const BasketModal = () => {
  const [data, setData, modal, handleCLose] = useContext(Context);
  const basket = useSelector((product) => product);
  console.log(basket);
  const onAdd = (e) => {
    const exist = basket.find((p) => p.id === e.id);
    if (exist) {
      const newProducts = basket.map((p) =>
        p.id === e.id ? { ...exist, qty: exist.qty + 1 } : p
      );
      setData(newProducts);
    } else {
      setData([...basket, { ...e, qty: 1 }]);
    }
  };
  const onRemove = (e) => {
    const exist = basket.find((p) => p.id === e.id);
    if (exist.qty === 1) {
      const newProducts = basket.filter((p) => p.id !== e.id);
      setData(newProducts);
    } else {
      const newProducts = basket.map((p) =>
        p.id === e.id ? { ...exist, qty: exist.qty - 1 } : p
      );
      setData(newProducts);
    }
  };
  const totalPrice = basket.reduce((a, b) => a + b.qty * b.price + 1500, 0);

  return (
    <>
      {!modal ? (
        <div className="basketModal">
          <div className="container">
            <div className="modalCard">
              <div className="card-image">
                <img
                  src="https://www.thespruceeats.com/thmb/jSsI2w8FkyTDrJhQkYJ5d0HS2uE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/green-salad-recipe-ensalada-verde-3083556-hero-01-256ac7f4162b45e5a1f82a5234a0708c.jpg"
                  alt="image"
                />
                <span onClick={handleCLose} className="closer">
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
                  {basket.map((product, index) => {
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
                                onClick={() => onAdd(product)}
                              >
                                +
                              </button>
                              {product.qty}
                              <button
                                className="btn btn-outline-danger ms-1"
                                onClick={() => onRemove(product)}
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
                <Link
                  onClick={handleCLose}
                  to={"/basket"}
                  className="btn btn-danger add"
                >
                  Add
                </Link>
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
