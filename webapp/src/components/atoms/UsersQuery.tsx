import React from 'react';
import { useQuery } from 'urql';

const getUsersQuery = `
  query {
    user {
      name
      id
    }
  }
`;

export default function UsersQuery() {
  const [result] = useQuery({
    query: getUsersQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul>
      {data.user.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
