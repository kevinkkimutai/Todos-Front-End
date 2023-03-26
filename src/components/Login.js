import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  function handleSubmitSignup(e) {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div className="section pt-0">
      <div className="container pt-0">
        <div className="row full-height justify-content-center pt-0">
          <div className="col-12 text-center align-self-center py-5 pt-0">
            <div className="section pb-0 pt-0 pt-sm-0 text-center pt-0">
              <h6 className="mb-0 pb-0 text-black">
                <span>Log In</span>
                <span> Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
              />
              <label htmlFor="reg-log"></label>

              <div className="card-3d-wrap mx-auto pt-0">
                <div className="card-3d-wrapper">
                  <div className="card-front">
                    <div className="center-wrap">
                      <form
                        onSubmit={handleSubmit}
                        className="section text-center"
                      >
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-style"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          <i className=" input-icon bi bi-envelope-at-fill"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            className="form-style"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <i className=" input-icon bi bi-key-fill"></i>
                        </div>
                        <Link className="nav-link " to="/home">
                          <button className="btn1 mt-4 btn btn-outline-info">
                            Login
                          </button>
                        </Link>

                        <p className="mb-0 mt-4 text-center">
                          <a href="#/" className="link">
                            Forgot your password?
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>

                  <div className="card-back">
                    <div className="center-wrap">
                      <form
                        className="section text-center pt-0"
                        onSubmit={handleSubmitSignup}
                      >
                        <h4 className="mb-3 pb-3">Sign Up</h4>

                        <div className="form-group mt-2">
                          <input
                            type="tel"
                            className="form-style"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          <i className="input-icon bi bi-person-fill-add"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            id="password"
                            className="form-style"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                          />
                          <i className=" input-icon bi bi-key-fill"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            id="password_confirmation"
                            className="form-style"
                            placeholder="Password_confirmation"
                            value={passwordConfirmation}
                            onChange={(e) =>
                              setPasswordConfirmation(e.target.value)
                            }
                            autoComplete="current-password"
                          />
                          <i className=" input-icon bi bi-key-fill"></i>
                        </div>
                        <Link className="nav-link " to="/home">
                          <button className="btn1 mt-4 btn btn-outline-info">
                            Register
                          </button>
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
