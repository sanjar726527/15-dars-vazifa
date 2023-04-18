import React from "react";
import { NavLink } from "react-router-dom";
import StyledButton from "../../MyButton";
import MainNavbarWrapper from "./MainNavbarWrapper";

const navLinks = [
  { to: "/user/home", text: "All" },
  { to: "/user/salads", text: "Salads" },
  { to: "/user/soups", text: "Soups" },
  { to: "/user/drinks", text: "Drinks" },
  { to: "/user/kebabs", text: "Kebabs" },
  { to: "/user/meat-dishes", text: "Meat dishes" },
  { to: "/user/chicken-dishes", text: "Chicken dishes" },
  { to: "/user/fish-dishes", text: "Fish dishes" },
  { to: "/user/vegetable-dishes", text: "Vegetable dishes" },
];

export const MainNavbar = () => {
  return (
    <MainNavbarWrapper>
      <div className="rows">
        {navLinks.map((link, i) => {
          return (
            <NavLink
              key={i}
              className={`list-card ${(isActive) =>
                isActive ? "active" : ""}`}
              to={link.to}
            >
              {link.text}
            </NavLink>
          );
        })}
      </div>
    </MainNavbarWrapper>
  );
};
