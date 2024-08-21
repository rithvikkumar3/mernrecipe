import React, { useContext, useState } from "react";
import { AppContext } from "../context/App_Context";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { register } = useContext(AppContext);
  const [gmail, setGmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await register(name, gmail, password);
      console.log(result.data); // Debugging: log the result data
      
      if (result.data.success) {
        toast("Registration successful!", {
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
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else if (result.data.message === "User already exists") {
        toast("User already exists. Please log in.", {
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
      } else {
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
      }
    } catch (error) {
      console.error(error); // Debugging: log any errors
      toast("Registration failed. Please try again.", {
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
          maxWidth: "500px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9", /* Light background for the form */
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", /* Light shadow for depth */
        }}
      >
        <h2 className="text-center" style={{ color: "#333" }}>Register</h2>
        <form
          onSubmit={registerHandler}
          style={{
            width: "100%",
            margin: "auto",
          }}
          className="my-3"
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              style={{
                borderRadius: "4px",
                border: "1px solid #ddd",
                padding: "10px",
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
              required
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              style={{
                borderRadius: "4px",
                border: "1px solid #ddd",
                padding: "10px",
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              style={{
                borderRadius: "4px",
                border: "1px solid #ddd",
                padding: "10px",
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
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
