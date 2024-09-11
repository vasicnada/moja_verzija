import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ addToken }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(true);



  function handleInput(e) {
        setIsLogin(true)
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
    console.log(newUserData);
    setUserData(newUserData);
  }

  let navigate = useNavigate();


  function handleLogin(e) {
    e.preventDefault();
    axios
      .post("api/login", userData)
      .then((response) => {
        console.log(response.data);
        window.sessionStorage.setItem(
            "auth_token",
            response.data.access_token
          );
          window.sessionStorage.setItem("name_login", response.data.message)
          addToken(response.data.access_token);
        navigate("/");
      })
      .catch((error) => {
        setIsLogin(false)
        console.log(error);
      });
  }

  return (
    <section
      className="vh-100"
      style={{
        paddingTop: 4.5 + "rem",
      }}
    >
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleLogin}>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter your email address"
                  name="email"
                  onInput={(e) => handleInput(e)}
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email adresa
                </label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  name="password"
                  onInput={handleInput}
                />
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
                <label style={{color: 'red', fontWeight: 'bold'}}>
                {!isLogin && "The username or password you entered does not exist! If you don't have an account, you must register."}
                </label>

                </div>

              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{
                    paddingLeft: 2.5 + "rem",
                    paddingRight: 2.5 + "rem",
                  }}
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                  <a href="/register" className="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
