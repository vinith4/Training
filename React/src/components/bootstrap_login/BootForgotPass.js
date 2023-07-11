import React from 'react'
import styles from "./BootLogin.module.css";
import imgq from "./Login.jpg";

import { Link } from "react-router-dom";

export const BootForgotPass = () => {
  return (
    <div> <div>
    <section class="vh-100">
      <div class="container ">
        <h3 className={`d-flex flex-column text-center mb-0 py-4 px-4 px-xl-5  ${styles.h1font}`}>
          Let's change the password,
        </h3>
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5 d-flex justify-content-end .justify-content-lg-end">
            <img src={imgq} class="img-fluid   " alt="Sample image" />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div class="form-outline mb-2">
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

             
             
              <div class="text-center justify-content-center  mt-2 pt-2">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >
                  Retset Password
                </button>
                <p class="small fw-bold mt-1 pt-1 mb-0">
                {" "}
                  <Link to="/login" class="link-normal">
                  Back to login page
                  </Link>
                </p>
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
  </div></div>
  )
}
