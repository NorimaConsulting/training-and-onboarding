import React from 'react';
import './App.css';
import MainScreen from './components/organisms/MainScreen/MainScreen';
import { Auth0Provider } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';
import CreatedBy from './pages/CreatedBy';
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
    <Auth0Provider
      domain="ramsey-recipe-dev.us.auth0.com"
      clientId="f0qoM6yhccCnMIHCjvlbSiQGQNWXc3Ii"
      redirectUri={window.location.origin}
    >
      <div className="App">
        <Provider value={client}>
          <MainScreen />
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
                // eslint-disable-next-line indent
                // eslint-disable-next-line indent
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
    </Auth0Provider>
  );
}

export default App;
