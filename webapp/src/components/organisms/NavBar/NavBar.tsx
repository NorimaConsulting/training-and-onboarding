import UserDropDown from '../../molecules/UserDropDown/UserDropDown';
import { Link } from 'react-router-dom';
import { React } from 'react';
import './NavBar.scss';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/" className="nav-bar__logo">
        <h2>GR RECIPES</h2>
      </Link>
      <Link to="/">
        <h2 className="nav-bar__link">Recipe</h2>
      </Link>
      <Link to="/">
        <h2 className="nav-bar__link">Home</h2>
      </Link>
      <div className="nav-bar__elements">
        {/* //TODO change this to the recipes component */}
        <input
          className="nav-bar__search-bar"
          type="search"
          placeholder="Search"
        ></input>
      </div>{' '}
      <UserDropDown />
    </div>
  );
}
