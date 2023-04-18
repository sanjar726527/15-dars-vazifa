import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
import { HiOutlineBackspace, HiOutlineClipboardList } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";
import { TfiUser } from "react-icons/tfi";
import { RiDonutChartFill } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import { ImCheckmark2 } from "react-icons/im";
import { FaRegChartBar, FaUsers } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import DelivererPageWrapper from "../DelivererPage/DelivererPageWrapper";
import { LoginContext } from "../../App";

export const DelivererPage = () => {
  const { setIsLogin } = useContext(LoginContext);

  return (
    <DelivererPageWrapper>
      <aside className="p-3 shadow">
        <div className="aside-row">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="list-group">
            <NavLink
              className={`list-card ${(isActive) =>
                isActive ? "active" : ""}`}
              to={"/deliverer/home"}
            >
              <div className="card-icon">
                <RiDonutChartFill size={22} color="#78909C" />
              </div>
              <div className="card-info">
                <h5 className="title">Arizalar</h5>
                <span className="text">
                  Yetib kelgan arizalarni kuzatish mumkin
                </span>
              </div>
            </NavLink>
            <NavLink
              to={"/deliverer/delivered"}
              className={`list-card ${(isActive) =>
                isActive ? "active" : ""}`}
            >
              <div className="card-icon">
                <ImCheckmark2 size={22} color="#78909C" />
              </div>
              <div className="card-info">
                <h5 className="title">Yetkazilgan</h5>
                <span className="text">
                  Yetkazilgan taomlar ro’yxati bilan tanishing
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </aside>
      <div className="rightSide">
        <header className="p-3 shadow">
          <div className="container">
            <div className="icon-one">
              <div className="hamburger hamburger-one"></div>
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
        <main className="pt-4 ps-3">
          <Outlet />
        </main>
      </div>
    </DelivererPageWrapper>
  );
};
