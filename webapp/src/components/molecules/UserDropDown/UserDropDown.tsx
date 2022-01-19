import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, { useRef, useState } from 'react';
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
  const [loginTxt, setLoginTxt] = useState('Login');

  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  const menu = useRef<TieredMenu>(null);

  const loginMenuItems = [
    {
      label: 'Create Account',
      icon: 'pi pi-fw pi-user-edit',
      // TODO Create Account Component isn't created yet but below is an option be used to navigate the user to that page
      // command: () => {
      //   navigateTo('/create-account');
      // }
    },
    {
      label: loginTxt,
      icon: 'pi pi-fw pi-power-off',
      command: () => {
        if (loginTxt === 'Login') {
          setLoginTxt('Sign Out');
        } else setLoginTxt('Login');
      },
    },
  ];

  const items = [
    {
      label: 'Profile',
      icon: 'pi pi-user',
      command: () => {
        navigateTo(`/profile/${props.user?.name}`);
      },
    },
    {
      label: loginTxt,
      icon: 'pi pi-fw pi-power-off',
      command: () => {
        if (loginTxt === 'Login') {
          setLoginTxt('Sign Out');
        } else {
          setLoginTxt('Login');
        }
      },
    },
  ];

  return (
    <div className="card">
      <TieredMenu
        model={loginTxt === 'Sign Out' ? items : loginMenuItems}
        popup
        ref={menu}
        id="overlay_tmenu"
      />
      <Button
        icon="pi pi-user"
        onClick={(event: any) => menu.current?.toggle(event)}
        aria-haspopup
        aria-controls="overlay_tmenu"
      />
    </div>
  );
}
