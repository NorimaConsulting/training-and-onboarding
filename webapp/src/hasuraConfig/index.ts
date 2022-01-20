// TODO: need graphql-code-gen branch for make this work
// import schema from './generated/graphql.schema.json'; //comes from graphql-code-generator



const HasuraConfig = buildHasuraConfig(
  schema,
  {
    claim: {
      typename: 'claim',
      primaryKey: ['id'],
      fieldFragment: ClaimFieldsFragmentDoc,
    }
  }
