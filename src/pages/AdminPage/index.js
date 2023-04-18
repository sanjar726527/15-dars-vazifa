import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { FiUser } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";
import { TfiUser } from "react-icons/tfi";
import { RiDonutChartFill } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import { ImCheckmark2 } from "react-icons/im";
import { FaRegChartBar, FaUsers } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import AdminPageWrapper from "../AdminPage/AdminPageWrapper";
import { LoginContext } from "../../App";
import { HiOutlineBackspace } from "react-icons/hi";

export const AdminPage = () => {
  const { setIsLogin } = useContext(LoginContext);

  return (
    <AdminPageWrapper>
      <aside className="p-3 shadow">
        <div className="aside-row">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="list-group">
            <NavLink
              to={"home"}
              className={`list-card ${(isActive) =>
                isActive ? "active" : ""}`}
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
              to={"delivered"}
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
            <NavLink
              to={"statistics"}
              className={`list-card ${(isActive) =>
                isActive ? "active" : ""}`}
            >
              <div className="card-icon">
                <FaRegChartBar size={22} color="#78909C" />
              </div>
              <div className="card-info">
                <h5 className="title">Statistika</h5>
                <span className="text">
                  Diagrammalar bilan ishlangan statistika
                </span>
              </div>
            </NavLink>
            <NavLink
              to={"add"}
              className={`list-card ${(isActive) =>
                isActive ? "active" : ""}`}
            >
              <div className="card-icon">
                <BsPlusLg size={22} color="#78909C" />
              </div>
              <div className="card-info">
                <h5 className="title">Qo’shish</h5>
                <span className="text">Yangi kategoriya/taom qo’shish</span>
              </div>
            </NavLink>
            <NavLink
              to={"users"}
              className={`list-card ${(isActive) =>
                isActive ? "active" : ""}`}
            >
              <div className="card-icon">
                <FaUsers size={22} color="#78909C" />
              </div>
              <div className="card-info">
                <h5 className="title">Foydalanuvchilar</h5>
                <span className="text" style={{ color: "#F3AA18" }}>
                  Rollarni biriktirishingiz mumkin
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
    </AdminPageWrapper>
  );
};
