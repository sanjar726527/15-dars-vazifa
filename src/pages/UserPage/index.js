import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MainHeader } from "../../components/User/MainHeader";
import { MainNavbar } from "../../components/User/MainNavbar";
import { MainTemplate } from "../../components/User/MainTemplate";
import UserPageWrapper from "./UserPageWrapper";
import { Dropdown } from "react-bootstrap";
import { SlBasket } from "react-icons/sl";
import { BsFillArrowUpCircleFill, BsSearch } from "react-icons/bs";
import { TfiUser } from "react-icons/tfi";
import { HiOutlineBackspace } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { BasketModal } from "../../components/User/Basket/BasketModal";
import { Basket } from "../../components/User/Basket";
import logo from "../../assets/logo.png";
import { LoginContext } from "../../App";

export const UserPage = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { setIsLogin } = useContext(LoginContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <UserPageWrapper>
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
                <Dropdown.Item href="/">
                  <FiUser className="me-2" size={20} /> Профиль
                </Dropdown.Item>
                <Dropdown.Item href="/">
                  <HiOutlineClipboardList className="me-2" size={20} />
                  Мои заказы
                </Dropdown.Item>
                <Dropdown.Item href="/">
                  <SlBasket className="me-2" size={20} /> Корзина
                </Dropdown.Item>
                <Link
                  className="dropdown-item"
                  onClick={() => {
                    setIsLogin(false);
                  }}
                  to={"/"}
                >
                  <HiOutlineBackspace className="me-2" size={20} /> Выйти
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
      <div className="main container">
        <main>
          <MainHeader />
          <MainNavbar />
          <MainTemplate>
            <Outlet />
          </MainTemplate>
          <Link to={"/user/home"} className="top-to-btm">
            {showTopBtn && (
              <BsFillArrowUpCircleFill
                size={50}
                className="icon-position icon-style"
                onClick={goToTop}
              />
            )}
          </Link>
        </main>
      </div>
      <div className="container basket pb-3">
        <Basket />
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
      <BasketModal />
    </UserPageWrapper>
  );
};
