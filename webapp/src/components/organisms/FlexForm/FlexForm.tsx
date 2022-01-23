import { FlexForm } from '@tesseractcollective/react-graphql-ui';
import { useReactGraphql } from '@tesseractcollective/react-graphql';
import React from 'react';
import HasuraConfig from '../../../resources/config/hasuraConfig';

// * https://github.com/tesseractcollective/purco/blob/dev/admin-ui/src/resources/ExamplePages/FlexFormExamples.tsx

export default function FlexFormBasic() {
  const api = useReactGraphql(HasuraConfig.user);

  return (
    <div>
      <h1>I am a Basic Flex Form </h1>
      <div className="bg-white">
        <FlexForm
          config={HasuraConfig.user}
          api={api}
          isNew={true}
          fields={['id', 'name', 'email']}
        ></FlexForm>
      </div>
    </div>
  );
}
