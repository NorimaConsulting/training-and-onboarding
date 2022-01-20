import { Card } from 'primereact/card';
import foodPlaceHolder from '../../assets/images/pasta.jpg';
import RatingStars from '../../components/molecules/RatingStars';
import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
/// TODO uncomment this out once DB is SetUp //
import { useQuery } from 'urql';

const getRecipes = `{
recipe {
  created_at
  user {
    recipe {
      prep_time_minutes
      title
    }
    name
  }
  reviews {
    rating
  }
}}
`;

// TODO recipe name, prep time, star rating, author/display name
// * Not sure if this is useful but option an to get the avg rating number on the front end could be using:
// ? const avgRating = arrayOfNumbers => arrayOfNumbers.reduce((a,b) => a + b, 0) / arrayOfNumbers.length

const placeholderREcipes: {
  title: string;
  displayName: string;
  time?: number | string;
  rating?: number | string;
}[] = [
  {
    title: 'Banana Bread',
    displayName: 'Gorden R',
    rating: 3.5,
    time: '30 mins',
  },
  {
    title: 'Cake',
    displayName: 'Martha S',
    rating: 2,
    time: '45 mins',
  },
  {
    title: 'Samosa',
    displayName: 'Expert_Chef',
    rating: 5,
    time: '30 mins',
  },
  {
    title: 'Krumkake',
    displayName: 'Betty B',
    rating: 4.5,
    time: '100 mins',
  },
  {
    title: 'Ice Cream',
    displayName: 'Wolfgang Puckk',
    rating: 5,
    time: '2 mins',
  },
];

// below creates an array to only show first 3 objects:
const suggestedNum = 3;
const firstOfRecipeLIst = placeholderREcipes.slice(0, suggestedNum);

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

  console.log(data);
  console.log('username', data.recipe[0].user.name);

  // Get 3 most recent recipes:
  const mostRecent = 3;
  const mostRecentRecipeList = data.recipe.slice(0, mostRecent);
  console.log(mostRecentRecipeList);
  console.log('username', mostRecentRecipeList[0].user.name);
  // * replace  line 103 firstOfREcipeLIst with mostRecentRecipeList and update objects

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
        {firstOfRecipeLIst.map((recipe: any) => {
          // * a better unique "key" prop for <Card/> might be the user id?
          return (
            // TODO: add function/props so when user clicks on recipe card a new tab opens to that single recipe.
            <>
              {/* <Link to={`/recipe/${the recipetitle}`}> */}
              <Link to="/recipe/:ID">
                <Card
                  key={recipe.rating}
                  title={recipe.title}
                  subTitle={`Posted by ${recipe.displayName}`}
                  style={{ width: '25rem', marginBottom: '2em' }}
                  className="p-component p-component--border "
                >
                  <p className="p-m-0" style={{ lineHeight: '1.5' }}>
                    Prep-time: {recipe.time}
                  </p>

                  <img
                    className="suggested-recipe__image"
                    src={foodPlaceHolder}
                    alt={recipe.title}
                  />

                  <div className="suggested-recipe__rating">
                    <p>{recipe.rating}</p>
                    <RatingStars rating={recipe.rating} />
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
