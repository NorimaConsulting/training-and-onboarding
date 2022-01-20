require('dotenv').config({path:'../.env'});

module.exports = {
  schema: [
    {
      [`${process.env.HASURA_GRAPHQL_ENDPOINT}/v1/graphql`]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET
        }
      }
    }
  ],
  // TODO: Figure out why it works when commented out
  // documents: ['src/**/*.graphql'],
  generates: {
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
  },
};
