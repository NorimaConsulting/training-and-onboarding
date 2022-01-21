import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

// * I"ve pnpm i the library but it's still giving a weird error that it can't find the module
//  https://www.npmjs.com/package/react-simple-star-rating

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars(
  props: RatingStarsProps
): React.ReactElement {
  const [rating, setRating] = useState(0);

  // ? In the future would it make sense to have the ratings average formula done in the backend? Average Star rating out of 5 stars might be something like:  ((Overall Rating * Total Rating) + new Rating) / (Total Rating + 1)

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <Rating
      initialValue={props.rating}
      onClick={handleRating}
      ratingValue={rating}
    />
  );
}
