import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import LoginWrapper from "./LoginWrapper";
import { LoginContext } from "../../App";
import { Form } from "react-bootstrap";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useContext(LoginContext);
  const [input, setInput] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const addInput = () => {
    console.log(input);
  };
  return (
    <LoginWrapper>
      <h1 className="display-1">Sign in</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="password"
            placeholder="@aBf!23v@$"
            name="password"
          />
        </Form.Group>
      </Form>
      <div className="buttons d-flex gap-3">
        <Link to={"/"} className="btn btn-danger">
          <BiArrowBack /> Back
        </Link>
        <button
          className="btn btn-primary"
          onClick={() => {
            setIsLogin(true);
            navigate("/");
            addInput();
          }}
        >
          Sign in
        </button>
      </div>
    </LoginWrapper>
  );
};
