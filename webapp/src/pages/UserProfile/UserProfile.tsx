import React from 'react';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'urql';
import './UserProfile.css';

const getUsers = `{
  user {
    id
    email
    name
  }}
`;

// mutation MyMutation {
//   update_user(where: {id: {_eq: ""}}, _set: {email: "", name: ""})

export default function UserProfile() {
  const params = useParams();
  const { user } = useAuth0();
  const { name, picture, email } = user;

  const [result] = useQuery({
    query: getUsers,
  });

  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...looks like there is an error {error.message}</p>;
  console.log(data.user);

  const singleUser = data.user.filter((user) => email === user.email);
  console.log(singleUser);

  return (
    <div className="userprofile">
      <h1>What a great profile page 😍 displayName: {params?.userName}</h1>
      <p>email: {email} </p>
      {/* //TODO Does it make more sense to have the edit button when clicked allows users to
      edit anything on their profile page  */}
      <button>edit profile </button>
      <Avatar
        image={picture}
        // icon="pi pi-user"
        className="mr-2"
        size="xlarge"
        shape="circle"
      />
      <h2>My Posted Recipes</h2>
      {/* //TODO add PrimeReact Recipe cards to map/display through users recipes. */}
    </div>
  );
}
