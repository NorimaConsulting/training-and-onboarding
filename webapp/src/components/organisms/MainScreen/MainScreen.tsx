import React from 'react';
import './MainScreen.css';
import NavBar from '../../organisms/NavBar/index';

/**
 * This is the main App component. If this starts getting too big, remember to refactor and nest things!
 * @returns
 */

/* TODO* is for future Signe to delete these "Sound Effects" after PR is approved since it was just for fun! */

function MainScreen() {
  return (
    <div className="MainScreen">
      <NavBar />
    </div>
  );
}

export default MainScreen;
