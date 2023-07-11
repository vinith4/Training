import React from "react";
import styles from "./BootLogin.module.css";
import imgq from "./Login.jpg";
import { useState } from "react";
import {Link,useNavigate } from "react-router-dom";

export const BootLogin = () => {

  const navigate = useNavigate();
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
    <div>
      <section class="vh-100">
        <div class="container ">
          <h3 className={`d-flex flex-column text-center mb-0 py-4 px-4 px-xl-5  ${styles.h1font}`}>
            Welcome back,
          </h3>
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5 d-flex justify-content-end .justify-content-lg-end">
              <img src={imgq} class="img-fluid   " alt="Sample image" />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div class="form-outline mb-5">
                  <label class="form-label" for="form3Example3">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                </div>

                <div class="form-outline mb-2">
                  <label class="form-label" for="form3Example4">
                    Password
                  </label>
                  <input
                    type={passwordShown ? "text" : "password"}
                    id="form3Example4"
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="form-check mb-0">
                    <input
                      class="form-check-input me-2"
                      type="checkbox"
                      value=""
                      onClick={eye}
                      id="form2Example3"
                    />
                    <label class="form-check-label" for="form2Example3">
                      Show Password
                    </label>
                  </div>
                 
                <Link to="/forgotpassword" class="link-normal">
                Forgot password?
                  </Link> 
             
                </div>

                <div class="text-center justify-content-center  mt-2 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                    onClick={() => navigate('/dashboard')}
                  >

                Login
                  
                  </button>
                  <p class="small fw-bold mt-1 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="/register" class="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
                <div class="divider d-flex align-items-center justify-content-center my-2">
                  <p class="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div class="divider d-flex align-items-center justify-content-center my-2">
                  <p class="lead fw-normal mb-0 me-3">Sign in with</p>
                </div>

                <div
                  class="d-flex flex-row align-items-center justify-content-end justify-content-lg-start"
                  style={{ paddingLeft: "4.5rem", paddingRight: "2.5rem" }}
                >
                  <button
                    type="button"
                    class="btn btn-primary btn-floating mx-1"
                  >
                    <i class="bi bi-facebook"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary btn-floating mx-1"
                  >
                    <i class="bi bi-google"></i>
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary btn-floating mx-1"
                  >
                    <i class="bi bi-twitter"></i>
                  </button>

                  <button
                    type="button"
                    class="btn btn-primary btn-floating mx-1"
                  >
                    <i class="bi bi-linkedin"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="d-flex flex-column flex-md-row text-center  justify-content-between d-flex align-items-end align-self-end py-3 px-3 px-xl-4 bg-primary">
            <div class="text-white mb-3 mb-md-0">Contact us</div>

            <div>
              <a href="#!" class="text-white me-4">
                <i class="bi bi-facebook"></i>
              </a>
              <a href="#!" class="text-white me-4">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#!" class="text-white me-4">
                <i class="bi bi-google"></i>
              </a>
              <a href="#!" class="text-white">
                <i class="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};
