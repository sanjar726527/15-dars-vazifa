import React, { useContext } from "react";
import { Dropdown, Form } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";
import { TfiUser } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { Context } from "../../../context/context";
import logo from "../../../assets/logo.png";
import BasketWrapper from "./BasketWrapper";
import { useSelector } from "react-redux";

export const BasketPage = () => {
  const [data, setData] = useContext(Context);
  const basket = useSelector((product) => product);
  const onAdd = (e) => {
    const exist = basket.find((p) => p.id === e.id);
    if (exist) {
      const newProducts = data.map((p) =>
        p.id === e.id ? { ...exist, qty: exist.qty + 1 } : p
      );
      setData(newProducts);
    } else {
      setData([...data, { ...e, qty: 1 }]);
    }
  };
  const onRemove = (e) => {
    const exist = data.find((p) => p.id === e.id);
    if (exist.qty === 1) {
      const newProducts = data.filter((p) => p.id !== e.id);
      setData(newProducts);
    } else {
      const newProducts = data.map((p) =>
        p.id === e.id ? { ...exist, qty: exist.qty - 1 } : p
      );
      setData(newProducts);
    }
  };
  const clearData = () => {
    const clearing = prompt("Are you clearing all of your products?");
    if (clearing) {
      setData([]);
    } else {
      alert("not clearing all of your products");
    }
  };
  console.log(data);
  return (
    <BasketWrapper>
      <header className="shadow">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="searchbar">
            <input className="form-control" type="text" placeholder="Search" />
            <BsSearch className="search-icon" />
          </div>
          <div className="user-login">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <TfiUser className="user-avatar" size={35} />
                <p className="user-name">Axror</p>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="//action-1">
                  <FiUser className="me-2" size={20} /> Профиль
                </Dropdown.Item>
                <Dropdown.Item href="//action-2">
                  <HiOutlineClipboardList className="me-2" size={20} />
                  Мои заказы
                </Dropdown.Item>
                <Dropdown.Item href="//action-3">
                  <SlBasket className="me-2" size={20} /> Корзина
                </Dropdown.Item>
                <Dropdown.Item href="//action-4">Выйти</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
      <div className="basketPage">
        <h1>Basket</h1>
        <div className="basket-main">
          <div className="basket-rows">
            {data.map((product) => {
              return (
                <div key={product.id} className="basket-card">
                  <div className="cart-item">
                    <div className="cart-image">
                      <img src={product.img} alt="image" />
                      <span className="badge">{product.qty}</span>
                    </div>
                    <div className="cart-info">
                      <b>{product.title}</b>
                      <b>{product.qty * (product.price + 1500)}</b>
                    </div>
                  </div>
                  <div className="cart-item2">
                    <button
                      className="btn btn-outline-success me-1"
                      onClick={() => onAdd(product)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-outline-danger ms-1"
                      onClick={() => onRemove(product)}
                    >
                      -
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <Form className="basket-comment mt-5">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h3>Comment to Order</h3>
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <div className="basket-footer">
            <button className="btn btn-success">Order acceptance</button>
            <span onClick={clearData} className="btn btn-danger">
              <span className="me-1">Clearing all products</span>
              <AiFillCloseCircle size={25} fill="white" />
            </span>
          </div>
        </div>

        <Link className="btn btn-primary mt-5 mb-5" to={"/user/home"}>
          <BiArrowBack /> Back
        </Link>
      </div>
      <footer className="py-5">
        <div className="container d-flex gap-5">
          <div className="card-footer">
            <p>© 2023 Express 24</p>
            <div className="icons">
              <a href="/" target={"_blank"}>
                <FaFacebookF className="icon" />
              </a>
              <a href="/" target={"_blank"}>
                <FaInstagram className="icon" />
              </a>
              <a href="/" target={"_blank"}>
                <FaTelegramPlane className="icon" />
              </a>
            </div>
          </div>
          <div className="card-footer">
            <div className="row">
              <a href="/">About</a>
              <a href="/">User comply</a>
              <a href="/">Contact</a>
              <a href="/">Answers and Questions</a>
              <a href="/">Application to partnership</a>
            </div>
          </div>
        </div>
      </footer>
    </BasketWrapper>
  );
};
