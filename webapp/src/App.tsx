import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreatedBy from './pages/CreatedBy';
import ReactDefaultApp from './ReactDefaultApp';

/**
 * This is the main App component. If this starts getting too big, remember to refactor and nest things!
 * @returns
 */
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ReactDefaultApp />} />
        {/* Leave this route, but don't necessarily display it once you have real features. */}
        <Route path="/created_by" element={<CreatedBy />}>
          {/* Using the same element since it's handling both. Normally you'd probably have a separate one */}
          <Route path=":displayName" element={<CreatedBy />} />
        </Route>
        <Route path="/blackRanger" element={<CreatedBy />} />
      </Routes>
    </div>
  );
}

export default App;
