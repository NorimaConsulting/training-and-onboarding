import React from 'react';
import ClickableImageCard from '../../components/molecules/ClickableImageCard/index';
import './RecipeList.css';

export default function RecipeList() {
  return (
    // * Not the most DRY code right now but ideally we would iterate though the array of recipes to populate this page :-)
    <div className="recipe-list">
      <h1>Look at all those recipes!! </h1>
      <div className="card__wrapper">
        <ClickableImageCard path={{ pathName: 'recipe' }} />
        <ClickableImageCard path={{ pathName: 'recipe' }} />
        <ClickableImageCard path={{ pathName: 'recipe' }} />
      </div>
    </div>
  );
}
