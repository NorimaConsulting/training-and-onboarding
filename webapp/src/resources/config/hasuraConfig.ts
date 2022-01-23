import { buildHasuraConfig } from '@tesseractcollective/react-graphql';
import schema from './generated/graphql.schema.json'; //comes from graphql-code-generator
import { UserFieldsFragmentDoc } from './generated/resourceApi';

export const HasuraConfig = buildHasuraConfig(schema, {
  user: {
    fieldFragment: UserFieldsFragmentDoc,
    primaryKey: ['id'],
    typename: 'user',
  },
});

export default HasuraConfig;

// * round two below

// import { DocumentNode, GraphQLOutputType, GraphQLSchema } from 'graphql';
// import { IFieldOutputType } from '../../support';

// export interface HasuraConfigType {
//   [key: string]: HasuraDataConfig;
// }

// export interface HasuraDataConfig {
//   typename: string;
//   primaryKey: string[];
//   fieldFragment: DocumentNode;
//   schema?: GraphQLSchema;
//   primaryKeyRequiredOnCreate?: boolean;
//   instanceId?: string;
//   relationshipMeta?: {
//     labelField?: string;
//     defaultWhere?: any;
//   };
//   excludeAggregate?: any;
//   fields?: {
//     fieldSimpleMap: { [key: string]: IFieldOutputType };
//     fieldTypeMap: { [key: string]: GraphQLOutputType };
//   };
//   jsonb?: {
//     columnName: string;
//   };
//   overrides?: {
//     operationNames?: {
//       query_many?: string;
//       query_aggregate?: string;
//       query_by_pk?: string;
//       delete_by_pk?: string;
//       insert_many?: string;
//       insert_one?: string;
//       update_by_pk?: string;
//     };
//     onConflict?: {
//       insert?: string;
//       insert_args?: string;
//     };
//     fieldFragments?: {
//       query_many?: DocumentNode;
//       query_aggregate?: DocumentNode;
//       query_by_pk?: DocumentNode;
//       delete_by_pk?: DocumentNode;
//       insert?: DocumentNode;
//       insert_core_one?: DocumentNode;
//       update_core?: DocumentNode;
//     };
//   };
// }
