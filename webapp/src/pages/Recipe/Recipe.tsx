import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Panel } from 'primereact/panel';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { v4 as uuidv4 } from 'uuid';
import PlaceHolder from '../../assets/images/french-toast.jpg';
import { useQuery } from 'urql';
import './Recipe.scss';

// use template lit to replace hard coded ID take ID from url: ${ID} for recipe_by_pk
const singleRecipeQuery = `{
      recipe_by_pk(id: "89d27c71-151f-497f-b1af-5eef1ca4a5e0") {
        title
        instructions
        ingredients
        prep_time_minutes
        user {
          name
        }
        reviews_aggregate {
          aggregate {
            avg {
              rating
            }
          }
        }
      }}
    `;

export default function Recipe() {
  //* retrive recipe ID from url path
  let { ID } = useParams();
  console.log(ID);
  const [selectedRecipe, setSelectedRecipe] = useState('');

  useEffect(() => {
    // TODO Make query to graphQL here, retrive the recipe with that title
  });

  const [result] = useQuery({
    query: singleRecipeQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...looks like there is an error {error.message}</p>;
  let recipe = data.recipe_by_pk;
  console.log(recipe);

  return (
    <div className="recipe">
      <div className="recipe__title-wrapper">
        <h1 className="recipe__title recipe__title--dark">{recipe.title} </h1>
        <h2 className="recipe__title ">Posted By: {recipe.user.name} </h2>
      </div>
      <img src={PlaceHolder} alt="toast" className="recipe__img" />
      <Panel header="Description">
        <p className="recipe__title recipe__panel-title">
          Prep Time: {recipe.prep_time_minutes} minutes{' '}
        </p>
        <p className="recipe__title recipe__panel-title">
          A recipe Description: Mouth watering recipe that is sure to become a
          favouite!
        </p>
      </Panel>
      <Splitter style={{ height: '300px' }} className="mb-5">
        <SplitterPanel className="flex align-items-center recipe__panel--customize">
          <strong>Ingredients:</strong>

          {recipe.ingredients.map((ingredient) => {
            return (
              <ul>
                <li key={ingredient} className="recipe__panel-list">
                  {ingredient}
                </li>
              </ul>
            );
          })}
        </SplitterPanel>
        <SplitterPanel className="flex align-items-center  recipe__panel--customize">
          <strong>Instructions:</strong>
          <p>{recipe.instructions}</p>
        </SplitterPanel>
      </Splitter>
    </div>
  );
}
