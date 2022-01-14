import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreatedBy from './pages/CreatedBy';
import NavBar from './components/organisms/NavBar/index';
import ReactDefaultApp from './ReactDefaultApp';
//* !testing *//
import HomePage from './pages/HomePage';
import Recipe from './pages/Recipe';
import RecipeList from './pages/RecipeList';
import UserProfile from './pages/UserProfile/UserProfile';

/**
 * This is the main App component. If this starts getting too big, remember to refactor and nest things!
 * @returns
 */

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Recipe />
      <RecipeList />
      <UserProfile />
      <Routes>
        <Route path="/" element={<ReactDefaultApp />} />
        {/* Leave this route, but don't necessarily display it once you have real features. */}
        <Route path="/created_by" element={<CreatedBy />}>
          {/* Using the same element since it's handling both. Normally you'd probably have a separate one */}
          <Route path=":displayName" element={<CreatedBy />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
