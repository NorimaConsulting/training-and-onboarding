import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreatedBy from './pages/CreatedBy';
import ReactDefaultApp from './ReactDefaultApp';

/**
 * This is the main App component. If this starts getting too big, remember to refactor and nest things!
 * @returns
 */

/* TODO * Will delete these Sound Effects later since it was just for fun! */
const SoundEffect = () => {
  return (
    <div>
      <h2>POW!!</h2>
    </div>
  );
};
const SoundEffectTWO = () => {
  return (
    <div>
      <h2>BAM!!</h2>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ReactDefaultApp />} />
        {/* Leave this route, but don't necessarily display it once you have real features. */}
        <Route path="/created_by" element={<CreatedBy />}>
          {/* Using the same element since it's handling both. Normally you'd probably have a separate one */}
          <Route path=":displayName" element={<SoundEffectTWO />} />
          <Route
            path="/created_by/yellow-power-ranger/:displayName"
            element={<SoundEffect />}
          ></Route>
        </Route>
        {/* <Route path="/yellow-power-ranger" element={<CreatedBy />}>
          <Route path=":displayName" element={<CreatedBy />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
