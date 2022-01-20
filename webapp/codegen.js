require('dotenv').config({path:'../.env'});

export const schema = [
  {
    [`${process.env.HASURA_GRAPHQL_ENDPOINT}/v1/graphql`]: {
      headers: {
        'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET
      }
    }
  }
];
export const generates = {
  'src/resources/config/generated/resourceApi/index.ts': {
    plugins: [
      'typescript',
      'typescript-operations',
      'typescript-urql',
    ],
  },
  'src/resources/config/generated/graphql.schema.json': {
    plugins: ['introspection'],
  },
};
