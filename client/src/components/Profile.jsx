import React, { useContext } from 'react';
import { AppContext } from '../context/App_Context';

const Profile = () => {
  const { user, userRecipe } = useContext(AppContext);

  return (
    <>
      <div className="container text-center my-5">
        <h1 className="mb-3">Welcome, {user.name}</h1>
        <h2 className="mb-3">{user.gmail}</h2> {/* Added a class for email */}
      </div>

      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: "1200px" }}>
          <div className="row">
            {userRecipe?.length > 0 ? (
              userRecipe.map((data) => (
                <div key={data._id} className="col-md-4 mb-4">
                  <div className="card shadow-sm" style={{ borderRadius: "10px" }}>
                    <img
                      src={data.imgurl}
                      className="card-img-top"
                      alt={data.title}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{data.title}</h5>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center col-12">
                <p>No recipes found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
