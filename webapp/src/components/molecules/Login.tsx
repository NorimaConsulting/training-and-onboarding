import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Link } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

const loggedInDropdown = [
  { label: 'View profile', value: '/profile' },
  { label: 'Logout', value: '/logout' },
];

export interface LoginProps {
  user: {
    name?: string;
    isLoggedIn: boolean;
  };
}

export default function Login(props: LoginProps) {
  const [loggedIn] = useState(props.user.isLoggedIn);

  if (!loggedIn) {
    return (
      <Link className="link" to={'/login'}>
        <Button label="Login" />
      </Link>
    );
  } else {
    return (
      <>
        <Dropdown
          value={'LID'}
          options={loggedInDropdown}
          onChange={(e) => {
            location.href = e.value;
          }}
          placeholder={`Hello, ${props.user.name}!`}
        />
      </>
    );
  }
}
