import UserDropDown from '../../molecules/UserDropDown/UserDropDown';
import { Link, Outlet, useParams } from 'react-router-dom';
import { React } from 'react';
import './NavBar.scss';

export default function NavBar() {
  const params = useParams();

  return (
    <div className="nav-bar">
      <Link to="/" className="nav-bar__logo">
        <h2>GR RECIPES</h2>
      </Link>
      <Link to="/recipe-list" className="nav-bar__link">
        <h2>Recipes</h2>
      </Link>
      <Link to="/home" className="nav-bar__link">
        <h2>Home</h2>
      </Link>
      {/* TODO: Once a Create Recipe Component is made, change this link/path to that Component */}
      <Link to="/" className="nav-bar__link">
        <h2>Create Recipe</h2>
      </Link>
      <div className="nav-bar__elements">
        <input
          className="nav-bar__search-bar"
          type="search"
          placeholder="Search"
        ></input>
      </div>{' '}
      {/* TODO For now this prop.user.name is hard coded until Auth/login is set up :-) */}
      <UserDropDown user={{ name: 'Gorden' }} />
      <Outlet />
    </div>
  );
}
