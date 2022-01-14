import React from 'react';
import AdvancedCard from '../../components/molecules/AdvancedCard/index';
import './RecipeList.css';

export default function RecipeList() {
  return (
    // * Not the most DRY code right now but ideally we would iterate though the array of recipes to populate this page :-)
    <div className="recipelist">
      <h1>Look at all those recipes!! </h1>
      <div className="card__wrapper">
        <AdvancedCard path={{ pathName: 'recipe' }} />
        <AdvancedCard path={{ pathName: 'recipe' }} />
        <AdvancedCard path={{ pathName: 'recipe' }} />
      </div>
    </div>
  );
}
