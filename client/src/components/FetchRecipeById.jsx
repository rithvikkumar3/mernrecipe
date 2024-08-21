import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/App_Context';
import { Link, useLocation } from 'react-router-dom';

const FetchRecipeById = ({ id }) => {
  const location = useLocation();
  const { getRecipeById } = useContext(AppContext);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const result = await getRecipeById(id);
      setRecipe(result.data.recipe);
    };

    fetchRecipe();
  }, [id, getRecipeById]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-container my-5 p-4" style={{ textAlign: 'center' }}>
      <div className="recipe-image mb-4">
        <img 
          src={recipe.imgurl} 
          alt={recipe.title} 
          className="img-fluid rounded-circle border border-warning" 
          style={{ width: '250px', height: '250px', objectFit: 'cover' }} 
        />
      </div>
      <h3 className="mb-3" style={{ color: '#333' }}>{recipe.title}</h3>
      {location.pathname !== '/saved' && (
        <>
          <div className="recipe-details mx-auto" style={{ maxWidth: '700px', textAlign: 'left' }}>
            <div className="ingredients mb-4">
              <h4 style={{ color: '#007bff' }}>Ingredients:</h4>
              <ul className="list-unstyled">
                {recipe.ingredients.map((ing, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>
                    {ing.name} - {ing.quantity}
                  </li>
                ))}
              </ul>
            </div>

            <div className="instructions">
              <h4 style={{ color: '#007bff' }}>Instructions:</h4>
              <p>{recipe.instructions}</p>
            </div>
          </div>
          <Link to="/" className="btn btn-warning mt-4">Back to Home</Link>
        </>
      )}
    </div>
  );
};

export default FetchRecipeById;
