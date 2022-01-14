import 'primeicons/primeicons.css';
import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import React, { useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { Button } from 'primereact/button';

export default function UserDropDown() {
  const menu = useRef(null);
  const items = [
    {
      label: 'Profile',
      icon: 'pi pi-user',
    },
    {
      label: 'Create Account',
      icon: 'pi pi-fw pi-user-edit',
    },

    {
      separator: true,
    },
    {
      /* TODO: Once everything is set up we can hold "Sign out" label in state so it changes to Sign in */
      label: 'Sign out',
      icon: 'pi pi-fw pi-power-off',
    },
  ];

  return (
    <div className="card">
      <TieredMenu model={items} popup ref={menu} id="overlay_tmenu" />
      <Button
        icon="pi pi-user"
        onClick={(event) => menu.current.toggle(event)}
        aria-haspopup
        aria-controls="overlay_tmenu"
      />
    </div>
  );
}
