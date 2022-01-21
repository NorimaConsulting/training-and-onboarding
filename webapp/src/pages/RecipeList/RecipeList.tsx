import React, { useState } from 'react';
import ClickableImageCard from '../../components/molecules/ClickableImageCard/index';
import './RecipeList.css';
import { useQuery } from 'urql';
import { Paginator } from 'primereact/paginator';

const getAllRecipes = `
    query {
        recipe(order_by: {created_at: asc}) {
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
  const [basicFirst, setBasicFirst] = useState(0);
  const [basicRows, setBasicRows] = useState(2);

  const onBasicPageChange = (event) => {
    setBasicFirst(event.first);
    setBasicRows(event.rows);
  };

  const [result] = useQuery({
    query: getAllRecipes,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    // * Not the most DRY code right now but ideally we would iterate though the array of recipes to populate this page :-)
    <div className="recipe-list">
      <h1>All Recipes:</h1>
      <div className="card_wrapper">
        <ul className="card_wrapper">
          {data.recipe.map((rec) => (
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
          ))}
        </ul>
      </div>
      <Paginator
        first={basicFirst}
        rows={basicRows}
        totalRecords={data.recipe.length}
        rowsPerPageOptions={[2, 5]}
        onPageChange={onBasicPageChange}
      ></Paginator>
    </div>
  );
}
