import React from 'react';
import PlaceHolderImage from '../../../assets/images/french-toast.jpg';
import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export interface routePath {
  path?: {
    pathName: string;
  };
}

export default function AdvancedCard(props: routePath) {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  const header = <img alt="Card" src={PlaceHolderImage} />;
  const footer = (
    <span>
      <Button label="Edit" icon="pi pi-check" />
      <Button
        label="Delete"
        icon="pi pi-times"
        className="p-button-secondary p-ml-2"
      />
    </span>
  );

  return (
    <div onClick={() => navigateTo(`/${props.path?.pathName}`)}>
      <Card
        title="Recipe Title"
        subTitle="Prep Time: 30mins"
        style={{ width: '25em' }}
        footer={footer}
        header={header}
      >
        <p className="p-m-0" style={{ lineHeight: '1.5' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </Card>
    </div>
  );
}
