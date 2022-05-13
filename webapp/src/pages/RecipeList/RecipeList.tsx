import React from 'react';
import { Recipe } from '../../resources/config/generated/resourceApi';
import ClickableImageCard from '../../components/molecules/ClickableImageCard/index';
import './RecipeList.css';
import { useQuery } from 'urql';

const getAllRecipes = `
    query {
        recipe(order_by: {created_at: desc}) {
            bake_time_minutes
            cook_time_minutes
            created_at
            cuisine
            id
            ingredients
            instructions
            meal_type
            posted_by
            prep_time_minutes
            tags
            title
            updated_at
            user {
                name
                id
            }
            reviews_aggregate {
                aggregate {
                  avg {
                    rating
                  }
                }
            }
        }
    }
`;

export default function RecipeList() {
  const [result] = useQuery<{ recipe: Recipe[] }, any>({
    query: getAllRecipes,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    // * Not the most DRY code right now but ideally we would iterate though the array of recipes to populate this page :-)
    <div className="recipe-list">
      <h1>All Recipes (from most recent):</h1>
      <div className="card_wrapper">
        <ul className="card_wrapper">
          {data?.recipe.map((rec: any) => {
            console.log(rec);
            return (
              <li key={rec.id}>
                <ClickableImageCard
                  key={rec.id}
                  recipe={{
                    id: rec.id,
                    title: rec.title,
                    prepTime: rec.prep_time_minutes,
                    userName: rec.user.name,
                    starRating: rec.reviews_aggregate.aggregate.avg.rating,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
