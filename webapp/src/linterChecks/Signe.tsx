import React from 'react';
import SpinButton from '../components/atoms/SpinButton/SpinButton';
import { Link } from 'react-router-dom';
export interface DevProps {
  developer?: {
    name: string;
    email?: string;
  };
}

/**
 * If you hover over the place you use this, it should show you this comment!
 *
 * @param props An object including a property named "developer" which represents a user
 * @returns A React Component
 */
export default function DeveloperName(props: DevProps) {
  const aVeryLongArray = [
    'This array should be broken up onto multiple lines',
    'and should contain a trailing comma after this line',
  ];
  aVeryLongArray.join(' ');

  // After confirming your styles are fixed you can also feel free to style your name, add more info, or make this fancier if you'd like!

  // The line below should give you a Typescript error, please fix it with optional chaining
  return (
    <div className="devname-wrapper">
      <label>Name:</label>
      <span>
        <Link to={`/yellow-power-ranger/${props.developer?.name}`}>
          {' '}
          {props.developer?.name}
        </Link>
        <SpinButton name={props.developer?.name} />
      </span>
    </div>
  );
}
