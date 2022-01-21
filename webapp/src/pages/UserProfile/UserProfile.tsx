import React from 'react';
import { Avatar } from 'primereact/avatar';
import { Card } from 'primereact/card';
import RatingStars from '../../components/molecules/RatingStars';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'urql';
import './UserProfile.scss';

// mutation MyMutation {
//   update_user(where: {id: {_eq: ""}}, _set: {email: "", name: ""})

export default function UserProfile() {
  const params = useParams();
  const { user } = useAuth0();
  const { name, picture, email } = user;

  const getLogedInUser = `{
    user(where: {email: {_eq:"${email}" }}) {
      recipe {
        id
        title
        reviews_aggregate {
          aggregate {
            avg {
              rating
            }
          }
        }
      }
      email
      name
    }}
  `;

  const [result] = useQuery({
    query: getLogedInUser,
  });

  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no...looks like there is an error {error.message}</p>;
  console.log(data.user[0].name);

  // const singleUser = data.user.filter((user) => email === user.email);
  // console.log(singleUser);

  return (
    <div className="user-profile">
      <h1>What a great profile page 😍 displayName: {params?.userName}</h1>
      <div className="user-profile__user-hero">
        <div className="user-profile__user-info">
          <p>email: {email} </p>
          {/* //TODO Does it make more sense to have the edit button when clicked allows users to
      edit anything on their profile page  */}
          <button>edit profile </button>
        </div>
        <Avatar
          image={picture}
          // icon="pi pi-user"
          className="mr-2 user-profile__user-avatar"
          size="xlarge"
          shape="circle"
        />
      </div>
      <h2>My Posted Recipes</h2>

      {/* //TODO add PrimeReact Recipe cards to map/display through users recipes. */}
      <Card
        // ? currently using the recipe id which should be unique but I'm still getting an error about child in a list need unique key
        key={10}
        title={'nothing to show'}
        subTitle={`Posted by ${data.user[0].name}`}
        style={{ width: '25rem', marginBottom: '2em' }}
        className="p-component p-component--border "
      >
        <p className="p-m-0" style={{ lineHeight: '1.5' }}>
          Prep-time: {'nothing to show'}
        </p>

        <img className="suggested-recipe__image" alt={'nothing to show'} />

        <div className="suggested-recipe__rating">
          <p>{'ratings'}</p>
          <RatingStars />
        </div>
      </Card>
    </div>
  );
}
