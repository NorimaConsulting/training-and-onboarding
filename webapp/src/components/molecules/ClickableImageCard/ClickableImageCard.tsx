import React from 'react';
import './ClickableImageCard.scss';
import PlaceHolderImage from '../../../assets/images/french-toast.jpg';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useQuery } from 'urql';

export interface recipeInformation {
  recipe?: {
    id: string;
    title: string;
    prepTime: number;
    userName: string;
    starRating: number;
  };
}

export default function ClickableImageCard(props: recipeInformation) {
  /* TODO: Remove this function if delete recipe via card functionality is not needed */
  const DeleteRecipe = (event) => {
    const deleteQuery = `
      mutation {
        delete_recipe(where: {id: {_eq: ${props.recipe?.id}}})
      }
    `;

    const confirmDeletion = window.confirm(
      'Are you sure you want to delete the recipe?'
    );

    if (confirmDeletion) {
      useQuery({
        query: deleteQuery,
      });
    }
  };

  const navigate = useNavigate();

  const header = <img alt="Card" src={PlaceHolderImage} />;
  const footer = (
    <span>
      <Button label="Edit" icon="pi pi-check" />
      <Button
        label="Delete"
        icon="pi pi-times"
        className="p-button-secondary p-ml-2"
        onClick={(event) => DeleteRecipe(event)}
      />
    </span>
  );

  return (
    <div onClick={() => navigate(`/recipe/${props.recipe?.id}`)}>
      <Card
        title={
          props.recipe?.title === undefined || props.recipe.title === ''
            ? 'No title'
            : props.recipe.title
        }
        subTitle={`Posted by: ${props.recipe?.userName}`}
        style={{ width: '25em' }}
        footer={footer}
        header={header}
      >
        {/* TODO: Update this information with whatever is needed. 
            Currently it shows recipe prep time and its average rating */}
        <p className="p-m-0" style={{ lineHeight: '1.5' }}>
          Prep time: {props.recipe?.prepTime} minutes<br></br>
          Average rating: {props.recipe?.starRating} stars
        </p>
      </Card>
    </div>
  );
}
