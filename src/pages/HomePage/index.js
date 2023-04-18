import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";
import img from "../../assets/Rectangle4.png";
import HomeWrapper from "./HomeWrapper";

export const HomePage = () => {
  const { isLogin } = useContext(LoginContext);
  return (
    <HomeWrapper>
      {isLogin ? (
        <div className="d-flex">
          <Link className="btn btn-danger" to={"/user/home"}>
            User
          </Link>
          <Link className="btn btn-primary  mx-3" to={"/admin/home"}>
            Admin
          </Link>
          <Link className="btn btn-warning me-5" to={"/deliverer/home"}>
            Deliverer
          </Link>
        </div>
      ) : (
        <Link className="btn btn-success ms-5" to={"/login"}>
          Sign in
        </Link>
      )}
      <h1>Welcome to Home</h1>
      <img src={img} alt="image" />
    </HomeWrapper>
  );
};
