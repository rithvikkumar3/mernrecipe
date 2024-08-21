import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await login(gmail, password);
      toast(result.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      if (result.data.success) {
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
    } catch (error) {
      toast("Login failed. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className="container my-5 p-4"
        style={{
          width: "400px",
          maxWidth: "90%",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#ffffff", /* White background for the form */
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", /* Light shadow for depth */
        }}
      >
        <h2 className="text-center" style={{ color: "#333" }}>Login</h2>
        <form
          onSubmit={loginHandler}
          style={{
            width: "100%",
            margin: "auto",
          }}
          className="my-3"
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              placeholder="Enter your email"
              style={{
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              required
              placeholder="Enter your password"
              style={{
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div className="d-grid col-12">
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                backgroundColor: "#007bff",
                borderColor: "#007bff",
                borderRadius: "4px",
                padding: "10px 15px",
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
