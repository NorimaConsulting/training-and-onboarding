import { Card } from 'primereact/card';
import foodPlaceHolder from '../../assets/images/pasta.jpg';
import RatingStars from '../../components/molecules/RatingStars';
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import { useQuery } from 'urql';

// Query to get all recipes
const getRecipes = `{
  recipe {
    created_at
    user {
      recipe {
        prep_time_minutes
        title
        id
      }
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

export default function HomePage() {
  const [result] = useQuery({
    query: getRecipes,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error)
    return (
      <p>
        Oh no...looks like there is an issue finding that recipe.{' '}
        {error.message}
      </p>
    );

  // Get 3 most recent recipes:
  const mostRecent = 3;
  const mostRecentRecipeList = data.recipe.slice(0, mostRecent);

  return (
    <>
      <div className="homepage">
        <div className="homepage__welcome-box">
          <h1 className="homepage__text">Welcome to GR Recipes.</h1>
          <p className="homepage__text">
            Where you&apos;ll find crème de la crème of people and recipes
          </p>
        </div>
      </div>
      <h2 className="homepage__header homepage__header--left "> New Recipes</h2>
      <div className="suggested-recipe">
        {mostRecentRecipeList.map((recipe: any) => {
          return (
            <>
              <Link
                to={`/recipe/${recipe.user.recipe.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card
                  // ? currently using the recipe id which should be unique but I'm still getting an error about child in a list need unique key
                  key={recipe.user.recipe.id}
                  title={recipe.user.recipe.title}
                  subTitle={`Posted by ${recipe.user.name}`}
                  style={{ width: '25rem', marginBottom: '2em' }}
                  className="p-component p-component--border "
                >
                  <p className="p-m-0" style={{ lineHeight: '1.5' }}>
                    Prep-time: {recipe.user.recipe.prep_time_minutes}
                  </p>

                  <img
                    className="suggested-recipe__image"
                    src={foodPlaceHolder}
                    alt={recipe.user.recipe.title}
                  />

                  <div className="suggested-recipe__rating">
                    <p>{recipe.reviews_aggregate.aggregate.avg.rating}</p>
                    <RatingStars
                      rating={recipe.reviews_aggregate.aggregate.avg.rating}
                    />
                  </div>
                </Card>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}
