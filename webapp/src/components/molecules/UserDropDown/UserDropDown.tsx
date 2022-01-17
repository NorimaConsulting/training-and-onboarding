import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, { useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export interface User {
  user?: {
    name: string;
    email?: string;
    avgRating?: string;
    // ? avatar: not sure value this would be?
    postedRecipes?: [];
  };
}

export default function UserDropDown(props: User) {
  const navigate = useNavigate();
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
  const navigateTo = (path: string) => {
    navigate(path);
  };

  console.log(navigate, 'inside UserDropDown');

  const menu = useRef<any>(null);

  const items = [
    {
      label: 'Profile',
      icon: 'pi pi-user',
      command: () => {
        navigateTo(`/profile/${props.user?.name}`);
      },
    },
    {
      label: 'Create Account',
      icon: 'pi pi-fw pi-user-edit',
    },

    {
      separator: true,
    },
    {
      label: 'Sign out',
      icon: 'pi pi-fw pi-power-off',
      command: () => {
        if (isAuthenticated) logout({ returnTo: window.location.origin });
      },
    },
  ];

  const unauthenticatedItems = [
    {
      label: 'Login/Signup',
      icon: 'pi pi-fw pi-power-off',
      command: () => {
        if (!isAuthenticated)
          loginWithRedirect({ returnTo: window.location.origin });
      },
    },
  ];

  return (
    <div className="card">
      <TieredMenu
        model={isAuthenticated ? items : unauthenticatedItems}
        popup
        ref={menu}
        id="overlay_tmenu"
      />
      <Button
        icon="pi pi-user"
        // !Looked into using null with TS and couldn't figure out a way to resolve this issue with menu,current/useRef(null)
        onClick={(event) => menu?.current?.toggle(event)}
        aria-haspopup
        aria-controls="overlay_tmenu"
      />
    </div>
  );
}
