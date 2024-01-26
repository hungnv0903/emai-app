import React, { Fragment, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import styles from "../CssModule/CssModule.module.css";
import users from "../../data/users.json";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formState, setFormState] = useState({
    emailAddress: "",
    password: "test@test",
    errorPassword: "",
  });
  const navigate = useNavigate() ; 

  useEffect(()=>{
    navigate("/login"); 
  },[])

  const handleEmailChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, emailAddress: event.target.value }));
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      password: event.target.value,
      errorPassword: "",
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    users.forEach((user) => {
      if (
        formState.emailAddress === user.email &&
        formState.password === user.password
      ) {
        console.log("succsess");
        navigate("/main/email") ; 
        setFormState((prev)=>({
          ...prev , errorPassword:"",
        }))
        localStorage.setItem('name',`${user.name}`) ; 
        localStorage.setItem('email' , `${user.email}`) ; 
        localStorage.setItem('avatarUrl' , `${user.avatarUrl}`) ; 
      } else {
        setFormState((prev) => ({
          ...prev,
          errorPassword: "Wrong email or password !!",
        }));
      }
    });
  };
  return (
    <div className={styles.container}>
      <Form
        style={{
          width: "500px",
          padding: "50px 20px",
          backgroundColor: "white",
          borderRadius: "6px",
          margin:"auto"
          
        }}
        onSubmit={handleSubmit}
      >
        <Row className="mb-4">
          <Col xs={8} className="m-auto">
            <Image src="src\images\connect-logo-black.svg" rounded />
            <p className="mt-4 h4 fw-light text-center">Login to check your email!!</p>
          </Col>
        </Row>
        <Form.Group className="mb-3">
          <Form.Label className="float-start">Email</Form.Label>
          <Form.Select
            style={{ width: "100%" }}
            aria-label="Default select example"
            className="form-control"
            onChange={handleEmailChange}
          >
            <option>---Choose an email</option>
            {users.map((user, index) => (
              <option key={index} value={user.email}>
                {user.email}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="float-start">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={formState.password}
            onChange={handlePasswordChange}
          />
          {formState.errorPassword && (
            <div className="text-danger float-left">
              {formState.errorPassword}
            </div>
          )}
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="w-100 mt-3"
          style={{ backgroundColor: "#152943" }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};
export default Login;
