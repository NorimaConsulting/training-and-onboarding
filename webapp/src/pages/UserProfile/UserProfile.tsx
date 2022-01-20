import React from 'react';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

export default function UserProfile() {
  const params = useParams();

  return (
    <div className="userprofile">
      <h1>What a great profile page 😍 displayName: {params?.userName}</h1>
      <p>email: </p>
      {/* //TODO maybe it makes sense the edit button when clicked allows users to
      edit anything on their profile page  */}
      <button>edit profile </button>
      <Avatar
        image="images/avatar/amyelsner.png"
        icon="pi pi-user"
        className="mr-2"
        size="xlarge"
        shape="circle"
      />
      <h2>My Posted Recipes</h2>
      //TODO add PrimeReact Recipe cards to map/display through users recipes.
    </div>
  );
}
