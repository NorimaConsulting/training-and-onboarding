import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function AdvancedCard() {
  const header = (
    <img
      alt="Card"
      src="images/usercard.png"
      onError={(e) =>
        (e.target.src =
          'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
      }
    />
  );
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

  // TODO: add a const rating
  return (
    <div>
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
