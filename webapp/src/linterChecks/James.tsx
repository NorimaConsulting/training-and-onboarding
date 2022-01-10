import React from 'react';
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
    'This array should be broken up on to multiple lines',
    'and should containt a trailing comma after this line',
  ];
  aVeryLongArray.join(' ');

  // The line below should give you a Typescript error, please fix it with optional chaining
  return (
    <div className="devname-wrapper">
      <label>Name: </label>
      <span>
        <Link to={`/created_by/${props.developer?.name}`}>
          {props.developer?.name}
        </Link>
      </span>
    </div>
  );
}
