import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Panel } from 'primereact/panel';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import PlaceHolder from '../../assets/images/french-toast.jpg';
import './Recipe.scss';

export default function Recipe() {
  //* retrive recipe ID from url path
  let { ID } = useParams();
  console.log(ID);
  const [selectedRecipe, setSelectedRecipe] = useState('');

  useEffect(() => {
    // TODO Make query to graphQL here, retrive the recipe with that title
    //and setSelectedRecipe with it.
    // query getSingleRecipe {
    //   // * id here is for Samosas
    //   recipe_by_pk(id: "89d27c71-151f-497f-b1af-5eef1ca4a5e0") {
    //     title
    //     instructions
    //     ingredients
    //     prep_time_minutes
    //     user {
    //       name
    //     }
    //     reviews_aggregate {
    //       aggregate {
    //         avg {
    //           rating
    //         }
    //       }
    //     }
    //   }
    // }
  });

  return (
    <div className="recipe">
      <div className="recipe__title-wrapper">
        <h1 className="recipe__title recipe__title--dark">Recipe Title: </h1>
        <h2 className="recipe__title ">Posted By: </h2>
      </div>
      <img src={PlaceHolder} alt="toast" className="recipe__img" />
      <Panel header="Description">
        <p className="recipe__title recipe__panel-title">Prep Time: </p>
        <p className="recipe__title recipe__panel-title">
          A recipe Description: Something delicous
        </p>
      </Panel>
      <Splitter style={{ height: '300px' }} className="mb-5">
        <SplitterPanel className="flex align-items-center recipe__panel--background">
          Ingredients:
          <ul>
            <li>an ingredient</li>
          </ul>
        </SplitterPanel>
        <SplitterPanel className="flex align-items-center justify-content-center recipe__panel--background">
          Instructions:
          <ol>
            <li className="recipe__ordered-list">some Instructions</li>
          </ol>
        </SplitterPanel>
      </Splitter>
    </div>
  );
}
