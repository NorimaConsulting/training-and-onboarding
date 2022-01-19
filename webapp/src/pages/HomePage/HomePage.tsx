import { Card } from 'primereact/card';
import foodPlaceHolder from '../../assets/images/pasta.jpg';

//* testing out a star rating library:
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import './HomePage.scss';

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
    rating: 5,
    time: '30 mins',
  },
  {
    title: 'Cake',
    displayName: 'Martha S',
    rating: 4,
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
    rating: 5,
    time: '100 mins',
  },
  {
    title: 'Ice Cream',
    displayName: 'Wolfgang Puckk',
    rating: 3,
    time: '2 mins',
  },
];
console.log(placeholderREcipes);

// below creates an array to only show first 3 objects:
const suggestedNum = 3;
const firstOfRecipeLIst = placeholderREcipes.slice(0, suggestedNum);
console.log(firstOfRecipeLIst);

export default function HomePage() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
    // * still need to figure out how to rewrite this function so it individually shows each recipe rating.
    // * this is the rating library I used: https://www.npmjs.com/package/react-simple-star-rating
  };

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
          // *a better unique "key" prop for <Card/> might be the user id?
          return (
            // TODO: add function/props so when user clicks on recipe card a new tab opens to that single recipe.
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
                <Rating
                  onClick={handleRating}
                  ratingValue={rating} /* Available Props */
                />
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
}
