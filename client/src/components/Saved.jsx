import React, { useContext } from 'react';
import { AppContext } from '../context/App_Context';
import FetchRecipeById from './FetchRecipeById';

const Saved = () => {
  const { savedRecipe } = useContext(AppContext);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Saved Recipes</h2>
      <div className="row">
        {savedRecipe.length > 0 ? (
          savedRecipe.map((data) => (
            <div key={data.recipe} className="col-md-4 mb-4">
              <div className="card" style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <FetchRecipeById id={data.recipe} />
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">
            <p>No saved recipes found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Saved;
