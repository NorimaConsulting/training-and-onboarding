import React from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

export default function UserProfile() {
  const params = useParams();

  return (
    <div className="userprofile">
      <h1>What a great profile page 😍 {params?.userName}</h1>
    </div>
  );
}
