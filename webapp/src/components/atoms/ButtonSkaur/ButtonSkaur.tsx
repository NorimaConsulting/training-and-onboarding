import React from 'react';
import './ButtonSkaur.css';

export default function ButtonSkaur() {
  const shoot = () => {
    alert('Great shot');
  };

  return (
    <div className="btnSkaur">
      <button onClick={shoot}>Click to shoot!</button>
    </div>
  );
}
