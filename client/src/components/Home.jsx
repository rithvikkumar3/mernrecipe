import React, { useContext } from 'react';
import { AppContext } from '../context/App_Context';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate();
  const { recipe, savedRecipeById } = useContext(AppContext);

  const saved = async (id) => {
    const result = await savedRecipeById(id);
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
  };

  return (
    <>
      <ToastContainer />
      <div className="container my-5">
        <div className="row d-flex justify-content-center align-items-start">
          {recipe.map((data) => (
            <div key={data._id} className="col-md-4 mb-4">
              <div className="card shadow-lg border-light">
                <img
                  src={data.imgurl}
                  className="card-img-top"
                  alt={data.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description || 'No description available'}</p>
                  <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-success"
                      onClick={() => saved(data._id)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-info"
                      onClick={() => navigate(`/${data._id}`)}
                    >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
