import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreatedBy from './pages/CreatedBy';
import NavBar from './components/organisms/NavBar';
import HomePage from './pages/HomePage';
import Recipe from './pages/Recipe';
import RecipeList from './pages/RecipeList';
import UserProfile from './pages/UserProfile/UserProfile';
import ButtonArsh from './components/atoms/ButtonArsh';
import UsersQuery from './components/atoms/UsersQuery';
import { createClient, Provider } from 'urql';

/**
 * This is the main App component. If this starts getting too big, remember to refactor and nest things!
 * @returns
 */

/* TODO* is for future Signe to delete these "Sound Effects" after PR is approved since it was just for fun! */
const SoundEffect = () => {
  return (
    <div>
      <p>POW!!</p>
    </div>
  );
};
const SoundEffectTWO = () => {
  return (
    <div>
      <p>BAM!!</p>
    </div>
  );
};

const client = createClient({
  url: import.meta.env.VITE_HASURA_GRAPHQL_ENDPOINT + '/v1/graphql',
  fetchOptions: () => {
    const token = import.meta.env.VITE_HASURA_GRAPHQL_ADMIN_SECRET;
    return {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': token,
      },
    };
  },
});

function App() {
  return (
    <div className="App">
      <Provider value={client}>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="recipe" element={<Recipe />} />
          <Route path="recipe-list" element={<RecipeList />} />
          <Route path="profile" element={<UserProfile />}>
            <Route path=":userName" element={<UserProfile />} />
          </Route>

          {/* Leave this route, but don't necessarily display it once you have real features. */}
          <Route path="/created_by" element={<CreatedBy />}>
            {/* Using the same element since it's handling both. Normally you'd probably have a separate one */}
            <Route path=":displayName" element={<SoundEffectTWO />} />
            <Route
              path="/created_by/yellow-power-ranger/:displayName"
              element={<SoundEffect />}
            ></Route>
          </Route>
          <Route
            path="*"
            element={
              <div>
                <p>
                  Sorry the page you&apos;re looking for isn&apos;t at this
                  address 😥
                </p>
                <p>please double-check the url!</p>
              </div>
            }
          />
          <Route path="/blackRanger" element={<CreatedBy />} />
          <Route path="/newbie" element={<ButtonArsh />} />
          {/* Remove this route when not needed for testing query purposes */}
          <Route path="/testQuery" element={<UsersQuery />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
