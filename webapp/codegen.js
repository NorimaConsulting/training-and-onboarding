require('dotenv').config({path: '../.env'});

module.exports = {
  schema: [
    {
      [`${process.env.HASURA_GRAPHQL_ENDPOINT}`]: {
        headers: {
          'x-hasura-admin-secret': process.env.ADMIN_SECRET
        }
      }
    }
  ],
  overwrite: true,
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
