import React from "react";
import styles from "./login.module.css";
import { useState } from "react";
import l from "./Login.jpg";

export const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const eye = (event) => {
    const x = event.target;

    if (x.checked) {
      setPasswordShown(true);
    } else {
      setPasswordShown(false);
    }
  };

  return (
       
        <div className={`container-fluid h-custom${styles.container}`}>
      <div className="d-flex flex-row justify-content-center col-12 col-md-8 col-lg-10  ">
        <div
          className={`d-flex flex-row  d-flex justify-content-end col-md-9 col-lg-6 col-xl-5 `}>
          <img src={l} alt="login " />
          <div className="d-flex flex-column justify-content-center p-2 col-6 col-md-8 col-lg-6 ">
            <h1 className={`fs-3 ${styles.title_color} mb-5`}>Welcome back,</h1>
            <div className="mb-3">
              <div className={`${styles.inputbox}`}>
                <i className="bi bi-person-circle"> </i>
                <input
                  type="text"
                  id="username"
                  className={`${styles.icon}`}
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className={`${styles.inputbox}`}>
                <i className="bi bi-person-fill-lock"> </i>
                <input
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  className={`${styles.icon}`}
                  placeholder="Password"
                />
              </div>
              <input type="checkbox" onClick={eye} /> Show Password
            </div>
            <div>
              <button
                className="btn btn-primary justify-content-center col-12 col-md-8 col-lg-6 "
                dtype="submit"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
