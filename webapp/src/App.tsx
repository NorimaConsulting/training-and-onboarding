import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreatedBy from './pages/CreatedBy';
import ReactDefaultApp from './ReactDefaultApp';
import ButtonArsh from './components/atoms/ButtonArsh';
import Login from './components/molecules/Login';

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
        <Route path="/newbie" element={<ButtonArsh />} />

        <Route
          path="/test"
          element={<Login user={{ name: 'Arsh', isLoggedIn: true }} />}
        />
        <Route path="/login" />
        <Route path="/logout" />
        <Route path="/profile" />
      </Routes>
    </div>
  );
}

export default App;
