import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from "../home/Home";

function Register() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ email: "", password: "" });
  function onUserUpdate(e) {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  async function onRegister(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!userData) {
      alert("fill all the fields");
      return;
    }
    let formempty = false;
    Object.values(userData).forEach((input) => {
      if (input === "") {
        formempty = true;
        return;
      }
    });
    if (formempty) {
      alert("fill all the fields");
      return;
    }
    const res = await axios.post(URL + "user/create", { data: userData });
    alert(res.data.msg);
    navigate("/login");
  }

  return (
    <section
      className="h-100 gradient-form"
      style={{ backgroundColor: "#eee" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                    </div>

                    <form>
                      <p>Create Account</p>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          name="email"
                          value={userData.email}
                          type="email"
                          id="form2Example11"
                          className="form-control"
                          placeholder="Enter Your Email"
                          onChange={(e) => onUserUpdate(e)}
                        />
                        <label className="form-label" htmlFor="form2Example11">
                          Username
                        </label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          className="form-control"
                          name="password"
                          value={userData.password}
                          onChange={(e) => onUserUpdate(e)}
                        />
                        <label className="form-label" htmlFor="form2Example22">
                          Password
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          onClick={(e) => onRegister(e)}
                        >
                          Register
                        </button>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4"></div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
