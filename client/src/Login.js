import { useState } from "react";
import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefualt();

    const response = await fetch("http://localhost:5000/api/creatuser", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: json.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }

    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      console.log(localStorage.getItem("authToken"));
      // navigate("/");
      Navigate("/");
    }
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <div>
      {/* <div className="container lw-15px">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={credentials.email}
              onChange={onChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={credentials.password}
              onChange={onChange}
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Login
          </button>
        
        </form>
      </div> */}
      <div class="bg" id="bg">
        <div class="login-box">
          <h2>Login</h2>
          <form>
            <div class="user-box">
              <input
                type="email"
                className="form-control"
                name="email"
                value={credentials.email}
                onChange={onChange}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <label>Username</label>
            </div>
            <div class="user-box">
              <input
                type="password"
                className="form-control"
                name="password"
                value={credentials.password}
                onChange={onChange}
                id="exampleInputPassword1"
              />
              <label>Password</label>
            </div>
            <a>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button type="submit" className="m-3 btn btn">
                Login
              </button>
            </a>
            <a>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button type="submit" className="m-3 btn btn">
                I'm a user
              </button>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}