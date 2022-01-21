import React from 'react';
import { useParams } from 'react-router-dom';
import { Panel } from 'primereact/panel';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import RatingStars from '../../components/molecules/RatingStars';
import PlaceHolder from '../../assets/images/samosa.jpg';
import { useQuery } from 'urql';
import './Recipe.scss';
// * homemade uuid ^_^ since the libaray won't
const uuid: number = Math.floor(Math.random() * 100000000);

export default function Recipe() {
  //* retrive recipe ID from url path
  const { ID } = useParams();

  const singleRecipeQuery = `{
    recipe_by_pk(id: "${ID}") {
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

  const [result] = useQuery({
    query: singleRecipeQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...looks like there is an error {error.message}</p>;
  const recipe = data.recipe_by_pk;

  console.log(recipe);

  return (
    <div className="recipe">
      <div className="recipe__title-wrapper">
        <h1 className="recipe__title recipe__title--dark">{recipe.title} </h1>
        {/* // *In the future the Posted by should be a link that routes to the user profile/recipes posted */}
        <h2 className="recipe__title ">Posted By: {recipe.user.name} </h2>
      </div>
      <div className="recipe__hero-wrapper">
        <div className="recipe__image-wrapper">
          <img src={PlaceHolder} alt="toast" className="recipe__img" />
          <p className="recipe__img-rating">
            {recipe.reviews_aggregate.aggregate.avg.rating}
          </p>
          <RatingStars rating={recipe.reviews_aggregate.aggregate.avg.rating} />
        </div>
        <div className="recipe__description-wrapper">
          <Panel header="Description">
            <p className="recipe__title recipe__panel-title">
              Prep Time: {recipe.prep_time_minutes} minutes{' '}
            </p>
            <p className="recipe__title recipe__panel-title">
              A recipe Description: Mouth watering recipe that is sure to become
              a favouite!
            </p>
          </Panel>
        </div>
      </div>
      <Splitter style={{ height: '300px' }} className="mb-5">
        <SplitterPanel className="flex align-items-center recipe__panel--customize">
          <strong>Ingredients:</strong>

          {recipe.ingredients.map((ingredient: object = {}) => {
            return (
              <ul key={uuid}>
                <li className="recipe__panel-list">{ingredient}</li>
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
