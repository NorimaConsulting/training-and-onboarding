import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, { useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

// * might have to adjust the User interface later on

export interface User {
  user?: {
    name: string;
    email?: string;
    avgRating?: string;
    avatar?: string;
    postedRecipes?: [];
  };
}

export default function UserDropDown(props: User) {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

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
      label: 'Sign Out',
      icon: 'pi pi-fw pi-power-off',
    },
  ];

  return (
    <div className="card">
      <TieredMenu model={items} popup ref={menu} id="overlay_tmenu" />
      <Button
        icon="pi pi-user"
        // !Looked into using null with TS and couldn't figure out a way to resolve this issue with menu,current/useRef(null)
        onClick={(event) => menu?.current.toggle(event)}
        aria-haspopup
        aria-controls="overlay_tmenu"
      />
    </div>
  );
}
