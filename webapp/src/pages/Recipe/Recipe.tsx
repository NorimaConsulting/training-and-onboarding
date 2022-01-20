import React from 'react';
import { Panel } from 'primereact/panel';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import './Recipe.css';

export default function Recipe() {
  return (
    <div className="recipe">
      <h1>Recipe Title: </h1>
      <h2>Posted By: </h2>
      <p>Prep Time: </p>
      <img src="" alt="" />
      <Panel header="Description">
        <p>A recipe Description: Something delicous</p>
      </Panel>
      <Splitter style={{ height: '300px' }} className="mb-5">
        <SplitterPanel className="flex align-items-center justify-content-center">
          Ingredients:
        </SplitterPanel>
        <SplitterPanel className="flex align-items-center justify-content-center">
          Instructions:
        </SplitterPanel>
      </Splitter>
    </div>
  );
}
