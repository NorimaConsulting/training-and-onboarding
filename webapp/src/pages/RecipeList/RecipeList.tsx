import React from 'react';
import AdvancedCard from '../../components/molecules/AdvancedCard/index';
import './RecipeList.css';

export default function RecipeList() {
  return (
    <div className="recipelist">
      <h1>Look at all those recipes!! </h1>
      <div className="card__wrapper">
        <AdvancedCard />
        <AdvancedCard />
        <AdvancedCard />
      </div>
    </div>
  );
}
