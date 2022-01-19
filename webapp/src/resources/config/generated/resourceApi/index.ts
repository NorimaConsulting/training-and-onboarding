import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _text: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _Text_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['_text']>;
  _gt?: InputMaybe<Scalars['_text']>;
  _gte?: InputMaybe<Scalars['_text']>;
  _in?: InputMaybe<Array<Scalars['_text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_text']>;
  _lte?: InputMaybe<Scalars['_text']>;
  _neq?: InputMaybe<Scalars['_text']>;
  _nin?: InputMaybe<Array<Scalars['_text']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "recipe" */
  delete_recipe?: Maybe<Recipe_Mutation_Response>;
  /** delete single row from the table: "recipe" */
  delete_recipe_by_pk?: Maybe<Recipe>;
  /** delete data from the table: "review" */
  delete_review?: Maybe<Review_Mutation_Response>;
  /** delete single row from the table: "review" */
  delete_review_by_pk?: Maybe<Review>;
  /** delete data from the table: "tag_enum" */
  delete_tag_enum?: Maybe<Tag_Enum_Mutation_Response>;
  /** delete single row from the table: "tag_enum" */
  delete_tag_enum_by_pk?: Maybe<Tag_Enum>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "user_tags" */
  delete_user_tags?: Maybe<User_Tags_Mutation_Response>;
  /** delete single row from the table: "user_tags" */
  delete_user_tags_by_pk?: Maybe<User_Tags>;
  /** insert data into the table: "recipe" */
  insert_recipe?: Maybe<Recipe_Mutation_Response>;
  /** insert a single row into the table: "recipe" */
  insert_recipe_one?: Maybe<Recipe>;
  /** insert data into the table: "review" */
  insert_review?: Maybe<Review_Mutation_Response>;
  /** insert a single row into the table: "review" */
  insert_review_one?: Maybe<Review>;
  /** insert data into the table: "tag_enum" */
  insert_tag_enum?: Maybe<Tag_Enum_Mutation_Response>;
  /** insert a single row into the table: "tag_enum" */
  insert_tag_enum_one?: Maybe<Tag_Enum>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "user_tags" */
  insert_user_tags?: Maybe<User_Tags_Mutation_Response>;
  /** insert a single row into the table: "user_tags" */
  insert_user_tags_one?: Maybe<User_Tags>;
  /** update data of the table: "recipe" */
  update_recipe?: Maybe<Recipe_Mutation_Response>;
  /** update single row of the table: "recipe" */
  update_recipe_by_pk?: Maybe<Recipe>;
  /** update data of the table: "review" */
  update_review?: Maybe<Review_Mutation_Response>;
  /** update single row of the table: "review" */
  update_review_by_pk?: Maybe<Review>;
  /** update data of the table: "tag_enum" */
  update_tag_enum?: Maybe<Tag_Enum_Mutation_Response>;
  /** update single row of the table: "tag_enum" */
  update_tag_enum_by_pk?: Maybe<Tag_Enum>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "user_tags" */
  update_user_tags?: Maybe<User_Tags_Mutation_Response>;
  /** update single row of the table: "user_tags" */
  update_user_tags_by_pk?: Maybe<User_Tags>;
};


/** mutation root */
export type Mutation_RootDelete_RecipeArgs = {
  where: Recipe_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recipe_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ReviewArgs = {
  where: Review_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Review_By_PkArgs = {
  recipe_id: Scalars['uuid'];
  reviewed_by: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Tag_EnumArgs = {
  where: Tag_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tag_Enum_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_TagsArgs = {
  where: User_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Tags_By_PkArgs = {
  recipe_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_RecipeArgs = {
  objects: Array<Recipe_Insert_Input>;
  on_conflict?: InputMaybe<Recipe_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recipe_OneArgs = {
  object: Recipe_Insert_Input;
  on_conflict?: InputMaybe<Recipe_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ReviewArgs = {
  objects: Array<Review_Insert_Input>;
  on_conflict?: InputMaybe<Review_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Review_OneArgs = {
  object: Review_Insert_Input;
  on_conflict?: InputMaybe<Review_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tag_EnumArgs = {
  objects: Array<Tag_Enum_Insert_Input>;
  on_conflict?: InputMaybe<Tag_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tag_Enum_OneArgs = {
  object: Tag_Enum_Insert_Input;
  on_conflict?: InputMaybe<Tag_Enum_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_TagsArgs = {
  objects: Array<User_Tags_Insert_Input>;
  on_conflict?: InputMaybe<User_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Tags_OneArgs = {
  object: User_Tags_Insert_Input;
  on_conflict?: InputMaybe<User_Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_RecipeArgs = {
  _inc?: InputMaybe<Recipe_Inc_Input>;
  _set?: InputMaybe<Recipe_Set_Input>;
  where: Recipe_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recipe_By_PkArgs = {
  _inc?: InputMaybe<Recipe_Inc_Input>;
  _set?: InputMaybe<Recipe_Set_Input>;
  pk_columns: Recipe_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ReviewArgs = {
  _inc?: InputMaybe<Review_Inc_Input>;
  _set?: InputMaybe<Review_Set_Input>;
  where: Review_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Review_By_PkArgs = {
  _inc?: InputMaybe<Review_Inc_Input>;
  _set?: InputMaybe<Review_Set_Input>;
  pk_columns: Review_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tag_EnumArgs = {
  _set?: InputMaybe<Tag_Enum_Set_Input>;
  where: Tag_Enum_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tag_Enum_By_PkArgs = {
  _set?: InputMaybe<Tag_Enum_Set_Input>;
  pk_columns: Tag_Enum_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_TagsArgs = {
  _set?: InputMaybe<User_Tags_Set_Input>;
  where: User_Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Tags_By_PkArgs = {
  _set?: InputMaybe<User_Tags_Set_Input>;
  pk_columns: User_Tags_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "recipe" */
  recipe: Array<Recipe>;
  /** fetch aggregated fields from the table: "recipe" */
  recipe_aggregate: Recipe_Aggregate;
  /** fetch data from the table: "recipe" using primary key columns */
  recipe_by_pk?: Maybe<Recipe>;
  /** fetch data from the table: "review" */
  review: Array<Review>;
  /** fetch aggregated fields from the table: "review" */
  review_aggregate: Review_Aggregate;
  /** fetch data from the table: "review" using primary key columns */
  review_by_pk?: Maybe<Review>;
  /** fetch data from the table: "tag_enum" */
  tag_enum: Array<Tag_Enum>;
  /** fetch aggregated fields from the table: "tag_enum" */
  tag_enum_aggregate: Tag_Enum_Aggregate;
  /** fetch data from the table: "tag_enum" using primary key columns */
  tag_enum_by_pk?: Maybe<Tag_Enum>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** An array relationship */
  user_tags: Array<User_Tags>;
  /** An aggregate relationship */
  user_tags_aggregate: User_Tags_Aggregate;
  /** fetch data from the table: "user_tags" using primary key columns */
  user_tags_by_pk?: Maybe<User_Tags>;
};


export type Query_RootRecipeArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recipe_Order_By>>;
  where?: InputMaybe<Recipe_Bool_Exp>;
};


export type Query_RootRecipe_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recipe_Order_By>>;
  where?: InputMaybe<Recipe_Bool_Exp>;
};


export type Query_RootRecipe_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootReviewArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


export type Query_RootReview_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


export type Query_RootReview_By_PkArgs = {
  recipe_id: Scalars['uuid'];
  reviewed_by: Scalars['uuid'];
};


export type Query_RootTag_EnumArgs = {
  distinct_on?: InputMaybe<Array<Tag_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tag_Enum_Order_By>>;
  where?: InputMaybe<Tag_Enum_Bool_Exp>;
};


export type Query_RootTag_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tag_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tag_Enum_Order_By>>;
  where?: InputMaybe<Tag_Enum_Bool_Exp>;
};


export type Query_RootTag_Enum_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_TagsArgs = {
  distinct_on?: InputMaybe<Array<User_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Tags_Order_By>>;
  where?: InputMaybe<User_Tags_Bool_Exp>;
};


export type Query_RootUser_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Tags_Order_By>>;
  where?: InputMaybe<User_Tags_Bool_Exp>;
};


export type Query_RootUser_Tags_By_PkArgs = {
  recipe_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/**
 * This table holds information about an individual recipe
 *
 *
 * columns and relationships of "recipe"
 *
 */
export type Recipe = {
  __typename?: 'recipe';
  bake_time_minutes?: Maybe<Scalars['Int']>;
  cook_time_minutes?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  cuisine: Scalars['String'];
  id: Scalars['uuid'];
  ingredients: Scalars['_text'];
  instructions: Scalars['String'];
  meal_type: Scalars['String'];
  posted_by: Scalars['uuid'];
  prep_time_minutes?: Maybe<Scalars['Int']>;
  /** An array relationship */
  reviews: Array<Review>;
  /** An aggregate relationship */
  reviews_aggregate: Review_Aggregate;
  tags?: Maybe<Scalars['_text']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: User;
  /** An array relationship */
  user_tags: Array<User_Tags>;
  /** An aggregate relationship */
  user_tags_aggregate: User_Tags_Aggregate;
};


/**
 * This table holds information about an individual recipe
 *
 *
 * columns and relationships of "recipe"
 *
 */
export type RecipeReviewsArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


/**
 * This table holds information about an individual recipe
 *
 *
 * columns and relationships of "recipe"
 *
 */
export type RecipeReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


/**
 * This table holds information about an individual recipe
 *
 *
 * columns and relationships of "recipe"
 *
 */
export type RecipeUser_TagsArgs = {
  distinct_on?: InputMaybe<Array<User_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Tags_Order_By>>;
  where?: InputMaybe<User_Tags_Bool_Exp>;
};


/**
 * This table holds information about an individual recipe
 *
 *
 * columns and relationships of "recipe"
 *
 */
export type RecipeUser_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Tags_Order_By>>;
  where?: InputMaybe<User_Tags_Bool_Exp>;
};

/** aggregated selection of "recipe" */
export type Recipe_Aggregate = {
  __typename?: 'recipe_aggregate';
  aggregate?: Maybe<Recipe_Aggregate_Fields>;
  nodes: Array<Recipe>;
};

/** aggregate fields of "recipe" */
export type Recipe_Aggregate_Fields = {
  __typename?: 'recipe_aggregate_fields';
  avg?: Maybe<Recipe_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Recipe_Max_Fields>;
  min?: Maybe<Recipe_Min_Fields>;
  stddev?: Maybe<Recipe_Stddev_Fields>;
  stddev_pop?: Maybe<Recipe_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Recipe_Stddev_Samp_Fields>;
  sum?: Maybe<Recipe_Sum_Fields>;
  var_pop?: Maybe<Recipe_Var_Pop_Fields>;
  var_samp?: Maybe<Recipe_Var_Samp_Fields>;
  variance?: Maybe<Recipe_Variance_Fields>;
};


/** aggregate fields of "recipe" */
export type Recipe_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Recipe_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Recipe_Avg_Fields = {
  __typename?: 'recipe_avg_fields';
  bake_time_minutes?: Maybe<Scalars['Float']>;
  cook_time_minutes?: Maybe<Scalars['Float']>;
  prep_time_minutes?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "recipe". All fields are combined with a logical 'AND'. */
export type Recipe_Bool_Exp = {
  _and?: InputMaybe<Array<Recipe_Bool_Exp>>;
  _not?: InputMaybe<Recipe_Bool_Exp>;
  _or?: InputMaybe<Array<Recipe_Bool_Exp>>;
  bake_time_minutes?: InputMaybe<Int_Comparison_Exp>;
  cook_time_minutes?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  cuisine?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  ingredients?: InputMaybe<_Text_Comparison_Exp>;
  instructions?: InputMaybe<String_Comparison_Exp>;
  meal_type?: InputMaybe<String_Comparison_Exp>;
  posted_by?: InputMaybe<Uuid_Comparison_Exp>;
  prep_time_minutes?: InputMaybe<Int_Comparison_Exp>;
  reviews?: InputMaybe<Review_Bool_Exp>;
  tags?: InputMaybe<_Text_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_tags?: InputMaybe<User_Tags_Bool_Exp>;
};

/** unique or primary key constraints on table "recipe" */
export enum Recipe_Constraint {
  /** unique or primary key constraint */
  RecipePkey = 'recipe_pkey'
}

/** input type for incrementing numeric columns in table "recipe" */
export type Recipe_Inc_Input = {
  bake_time_minutes?: InputMaybe<Scalars['Int']>;
  cook_time_minutes?: InputMaybe<Scalars['Int']>;
  prep_time_minutes?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "recipe" */
export type Recipe_Insert_Input = {
  bake_time_minutes?: InputMaybe<Scalars['Int']>;
  cook_time_minutes?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  cuisine?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  ingredients?: InputMaybe<Scalars['_text']>;
  instructions?: InputMaybe<Scalars['String']>;
  meal_type?: InputMaybe<Scalars['String']>;
  posted_by?: InputMaybe<Scalars['uuid']>;
  prep_time_minutes?: InputMaybe<Scalars['Int']>;
  reviews?: InputMaybe<Review_Arr_Rel_Insert_Input>;
  tags?: InputMaybe<Scalars['_text']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_tags?: InputMaybe<User_Tags_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Recipe_Max_Fields = {
  __typename?: 'recipe_max_fields';
  bake_time_minutes?: Maybe<Scalars['Int']>;
  cook_time_minutes?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  cuisine?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instructions?: Maybe<Scalars['String']>;
  meal_type?: Maybe<Scalars['String']>;
  posted_by?: Maybe<Scalars['uuid']>;
  prep_time_minutes?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Recipe_Min_Fields = {
  __typename?: 'recipe_min_fields';
  bake_time_minutes?: Maybe<Scalars['Int']>;
  cook_time_minutes?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  cuisine?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  instructions?: Maybe<Scalars['String']>;
  meal_type?: Maybe<Scalars['String']>;
  posted_by?: Maybe<Scalars['uuid']>;
  prep_time_minutes?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "recipe" */
export type Recipe_Mutation_Response = {
  __typename?: 'recipe_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Recipe>;
};

/** input type for inserting object relation for remote table "recipe" */
export type Recipe_Obj_Rel_Insert_Input = {
  data: Recipe_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Recipe_On_Conflict>;
};

/** on conflict condition type for table "recipe" */
export type Recipe_On_Conflict = {
  constraint: Recipe_Constraint;
  update_columns?: Array<Recipe_Update_Column>;
  where?: InputMaybe<Recipe_Bool_Exp>;
};

/** Ordering options when selecting data from "recipe". */
export type Recipe_Order_By = {
  bake_time_minutes?: InputMaybe<Order_By>;
  cook_time_minutes?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cuisine?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ingredients?: InputMaybe<Order_By>;
  instructions?: InputMaybe<Order_By>;
  meal_type?: InputMaybe<Order_By>;
  posted_by?: InputMaybe<Order_By>;
  prep_time_minutes?: InputMaybe<Order_By>;
  reviews_aggregate?: InputMaybe<Review_Aggregate_Order_By>;
  tags?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_tags_aggregate?: InputMaybe<User_Tags_Aggregate_Order_By>;
};

/** primary key columns input for table: recipe */
export type Recipe_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "recipe" */
export enum Recipe_Select_Column {
  /** column name */
  BakeTimeMinutes = 'bake_time_minutes',
  /** column name */
  CookTimeMinutes = 'cook_time_minutes',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Cuisine = 'cuisine',
  /** column name */
  Id = 'id',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Instructions = 'instructions',
  /** column name */
  MealType = 'meal_type',
  /** column name */
  PostedBy = 'posted_by',
  /** column name */
  PrepTimeMinutes = 'prep_time_minutes',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "recipe" */
export type Recipe_Set_Input = {
  bake_time_minutes?: InputMaybe<Scalars['Int']>;
  cook_time_minutes?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  cuisine?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  ingredients?: InputMaybe<Scalars['_text']>;
  instructions?: InputMaybe<Scalars['String']>;
  meal_type?: InputMaybe<Scalars['String']>;
  posted_by?: InputMaybe<Scalars['uuid']>;
  prep_time_minutes?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['_text']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Recipe_Stddev_Fields = {
  __typename?: 'recipe_stddev_fields';
  bake_time_minutes?: Maybe<Scalars['Float']>;
  cook_time_minutes?: Maybe<Scalars['Float']>;
  prep_time_minutes?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Recipe_Stddev_Pop_Fields = {
  __typename?: 'recipe_stddev_pop_fields';
  bake_time_minutes?: Maybe<Scalars['Float']>;
  cook_time_minutes?: Maybe<Scalars['Float']>;
  prep_time_minutes?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Recipe_Stddev_Samp_Fields = {
  __typename?: 'recipe_stddev_samp_fields';
  bake_time_minutes?: Maybe<Scalars['Float']>;
  cook_time_minutes?: Maybe<Scalars['Float']>;
  prep_time_minutes?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Recipe_Sum_Fields = {
  __typename?: 'recipe_sum_fields';
  bake_time_minutes?: Maybe<Scalars['Int']>;
  cook_time_minutes?: Maybe<Scalars['Int']>;
  prep_time_minutes?: Maybe<Scalars['Int']>;
};

/** update columns of table "recipe" */
export enum Recipe_Update_Column {
  /** column name */
  BakeTimeMinutes = 'bake_time_minutes',
  /** column name */
  CookTimeMinutes = 'cook_time_minutes',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Cuisine = 'cuisine',
  /** column name */
  Id = 'id',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  Instructions = 'instructions',
  /** column name */
  MealType = 'meal_type',
  /** column name */
  PostedBy = 'posted_by',
  /** column name */
  PrepTimeMinutes = 'prep_time_minutes',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Recipe_Var_Pop_Fields = {
  __typename?: 'recipe_var_pop_fields';
  bake_time_minutes?: Maybe<Scalars['Float']>;
  cook_time_minutes?: Maybe<Scalars['Float']>;
  prep_time_minutes?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Recipe_Var_Samp_Fields = {
  __typename?: 'recipe_var_samp_fields';
  bake_time_minutes?: Maybe<Scalars['Float']>;
  cook_time_minutes?: Maybe<Scalars['Float']>;
  prep_time_minutes?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Recipe_Variance_Fields = {
  __typename?: 'recipe_variance_fields';
  bake_time_minutes?: Maybe<Scalars['Float']>;
  cook_time_minutes?: Maybe<Scalars['Float']>;
  prep_time_minutes?: Maybe<Scalars['Float']>;
};

/**
 * This table holds information about individual review
 *
 *
 * columns and relationships of "review"
 *
 */
export type Review = {
  __typename?: 'review';
  comment: Scalars['String'];
  rating: Scalars['Int'];
  /** An object relationship */
  recipe: Recipe;
  recipe_id: Scalars['uuid'];
  reviewed_by: Scalars['uuid'];
  /** An object relationship */
  user: User;
};

/** aggregated selection of "review" */
export type Review_Aggregate = {
  __typename?: 'review_aggregate';
  aggregate?: Maybe<Review_Aggregate_Fields>;
  nodes: Array<Review>;
};

/** aggregate fields of "review" */
export type Review_Aggregate_Fields = {
  __typename?: 'review_aggregate_fields';
  avg?: Maybe<Review_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Review_Max_Fields>;
  min?: Maybe<Review_Min_Fields>;
  stddev?: Maybe<Review_Stddev_Fields>;
  stddev_pop?: Maybe<Review_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Review_Stddev_Samp_Fields>;
  sum?: Maybe<Review_Sum_Fields>;
  var_pop?: Maybe<Review_Var_Pop_Fields>;
  var_samp?: Maybe<Review_Var_Samp_Fields>;
  variance?: Maybe<Review_Variance_Fields>;
};


/** aggregate fields of "review" */
export type Review_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Review_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "review" */
export type Review_Aggregate_Order_By = {
  avg?: InputMaybe<Review_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Review_Max_Order_By>;
  min?: InputMaybe<Review_Min_Order_By>;
  stddev?: InputMaybe<Review_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Review_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Review_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Review_Sum_Order_By>;
  var_pop?: InputMaybe<Review_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Review_Var_Samp_Order_By>;
  variance?: InputMaybe<Review_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "review" */
export type Review_Arr_Rel_Insert_Input = {
  data: Array<Review_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Review_On_Conflict>;
};

/** aggregate avg on columns */
export type Review_Avg_Fields = {
  __typename?: 'review_avg_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "review" */
export type Review_Avg_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "review". All fields are combined with a logical 'AND'. */
export type Review_Bool_Exp = {
  _and?: InputMaybe<Array<Review_Bool_Exp>>;
  _not?: InputMaybe<Review_Bool_Exp>;
  _or?: InputMaybe<Array<Review_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  rating?: InputMaybe<Int_Comparison_Exp>;
  recipe?: InputMaybe<Recipe_Bool_Exp>;
  recipe_id?: InputMaybe<Uuid_Comparison_Exp>;
  reviewed_by?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
};

/** unique or primary key constraints on table "review" */
export enum Review_Constraint {
  /** unique or primary key constraint */
  ReviewPkey = 'review_pkey'
}

/** input type for incrementing numeric columns in table "review" */
export type Review_Inc_Input = {
  rating?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "review" */
export type Review_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  recipe?: InputMaybe<Recipe_Obj_Rel_Insert_Input>;
  recipe_id?: InputMaybe<Scalars['uuid']>;
  reviewed_by?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Review_Max_Fields = {
  __typename?: 'review_max_fields';
  comment?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  recipe_id?: Maybe<Scalars['uuid']>;
  reviewed_by?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "review" */
export type Review_Max_Order_By = {
  comment?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  reviewed_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Review_Min_Fields = {
  __typename?: 'review_min_fields';
  comment?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  recipe_id?: Maybe<Scalars['uuid']>;
  reviewed_by?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "review" */
export type Review_Min_Order_By = {
  comment?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  reviewed_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "review" */
export type Review_Mutation_Response = {
  __typename?: 'review_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Review>;
};

/** on conflict condition type for table "review" */
export type Review_On_Conflict = {
  constraint: Review_Constraint;
  update_columns?: Array<Review_Update_Column>;
  where?: InputMaybe<Review_Bool_Exp>;
};

/** Ordering options when selecting data from "review". */
export type Review_Order_By = {
  comment?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  recipe?: InputMaybe<Recipe_Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  reviewed_by?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
};

/** primary key columns input for table: review */
export type Review_Pk_Columns_Input = {
  recipe_id: Scalars['uuid'];
  reviewed_by: Scalars['uuid'];
};

/** select columns of table "review" */
export enum Review_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Rating = 'rating',
  /** column name */
  RecipeId = 'recipe_id',
  /** column name */
  ReviewedBy = 'reviewed_by'
}

/** input type for updating data in table "review" */
export type Review_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  recipe_id?: InputMaybe<Scalars['uuid']>;
  reviewed_by?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Review_Stddev_Fields = {
  __typename?: 'review_stddev_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "review" */
export type Review_Stddev_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Review_Stddev_Pop_Fields = {
  __typename?: 'review_stddev_pop_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "review" */
export type Review_Stddev_Pop_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Review_Stddev_Samp_Fields = {
  __typename?: 'review_stddev_samp_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "review" */
export type Review_Stddev_Samp_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Review_Sum_Fields = {
  __typename?: 'review_sum_fields';
  rating?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "review" */
export type Review_Sum_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** update columns of table "review" */
export enum Review_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Rating = 'rating',
  /** column name */
  RecipeId = 'recipe_id',
  /** column name */
  ReviewedBy = 'reviewed_by'
}

/** aggregate var_pop on columns */
export type Review_Var_Pop_Fields = {
  __typename?: 'review_var_pop_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "review" */
export type Review_Var_Pop_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Review_Var_Samp_Fields = {
  __typename?: 'review_var_samp_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "review" */
export type Review_Var_Samp_Order_By = {
  rating?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Review_Variance_Fields = {
  __typename?: 'review_variance_fields';
  rating?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "review" */
export type Review_Variance_Order_By = {
  rating?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "recipe" */
  recipe: Array<Recipe>;
  /** fetch aggregated fields from the table: "recipe" */
  recipe_aggregate: Recipe_Aggregate;
  /** fetch data from the table: "recipe" using primary key columns */
  recipe_by_pk?: Maybe<Recipe>;
  /** fetch data from the table: "review" */
  review: Array<Review>;
  /** fetch aggregated fields from the table: "review" */
  review_aggregate: Review_Aggregate;
  /** fetch data from the table: "review" using primary key columns */
  review_by_pk?: Maybe<Review>;
  /** fetch data from the table: "tag_enum" */
  tag_enum: Array<Tag_Enum>;
  /** fetch aggregated fields from the table: "tag_enum" */
  tag_enum_aggregate: Tag_Enum_Aggregate;
  /** fetch data from the table: "tag_enum" using primary key columns */
  tag_enum_by_pk?: Maybe<Tag_Enum>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** An array relationship */
  user_tags: Array<User_Tags>;
  /** An aggregate relationship */
  user_tags_aggregate: User_Tags_Aggregate;
  /** fetch data from the table: "user_tags" using primary key columns */
  user_tags_by_pk?: Maybe<User_Tags>;
};


export type Subscription_RootRecipeArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recipe_Order_By>>;
  where?: InputMaybe<Recipe_Bool_Exp>;
};


export type Subscription_RootRecipe_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recipe_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recipe_Order_By>>;
  where?: InputMaybe<Recipe_Bool_Exp>;
};


export type Subscription_RootRecipe_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootReviewArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


export type Subscription_RootReview_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


export type Subscription_RootReview_By_PkArgs = {
  recipe_id: Scalars['uuid'];
  reviewed_by: Scalars['uuid'];
};


export type Subscription_RootTag_EnumArgs = {
  distinct_on?: InputMaybe<Array<Tag_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tag_Enum_Order_By>>;
  where?: InputMaybe<Tag_Enum_Bool_Exp>;
};


export type Subscription_RootTag_Enum_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tag_Enum_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tag_Enum_Order_By>>;
  where?: InputMaybe<Tag_Enum_Bool_Exp>;
};


export type Subscription_RootTag_Enum_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_TagsArgs = {
  distinct_on?: InputMaybe<Array<User_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Tags_Order_By>>;
  where?: InputMaybe<User_Tags_Bool_Exp>;
};


export type Subscription_RootUser_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Tags_Order_By>>;
  where?: InputMaybe<User_Tags_Bool_Exp>;
};


export type Subscription_RootUser_Tags_By_PkArgs = {
  recipe_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/**
 * enum table for the tags
 *
 *
 * columns and relationships of "tag_enum"
 *
 */
export type Tag_Enum = {
  __typename?: 'tag_enum';
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  /** An array relationship */
  user_tags: Array<User_Tags>;
  /** An aggregate relationship */
  user_tags_aggregate: User_Tags_Aggregate;
};


/**
 * enum table for the tags
 *
 *
 * columns and relationships of "tag_enum"
 *
 */
export type Tag_EnumUser_TagsArgs = {
  distinct_on?: InputMaybe<Array<User_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Tags_Order_By>>;
  where?: InputMaybe<User_Tags_Bool_Exp>;
};


/**
 * enum table for the tags
 *
 *
 * columns and relationships of "tag_enum"
 *
 */
export type Tag_EnumUser_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Tags_Order_By>>;
  where?: InputMaybe<User_Tags_Bool_Exp>;
};

/** aggregated selection of "tag_enum" */
export type Tag_Enum_Aggregate = {
  __typename?: 'tag_enum_aggregate';
  aggregate?: Maybe<Tag_Enum_Aggregate_Fields>;
  nodes: Array<Tag_Enum>;
};

/** aggregate fields of "tag_enum" */
export type Tag_Enum_Aggregate_Fields = {
  __typename?: 'tag_enum_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tag_Enum_Max_Fields>;
  min?: Maybe<Tag_Enum_Min_Fields>;
};


/** aggregate fields of "tag_enum" */
export type Tag_Enum_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tag_Enum_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tag_enum". All fields are combined with a logical 'AND'. */
export type Tag_Enum_Bool_Exp = {
  _and?: InputMaybe<Array<Tag_Enum_Bool_Exp>>;
  _not?: InputMaybe<Tag_Enum_Bool_Exp>;
  _or?: InputMaybe<Array<Tag_Enum_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  user_tags?: InputMaybe<User_Tags_Bool_Exp>;
};

/** unique or primary key constraints on table "tag_enum" */
export enum Tag_Enum_Constraint {
  /** unique or primary key constraint */
  TagEnumPkey = 'tag_enum_pkey'
}

export enum Tag_Enum_Enum {
  /** tastes delish */
  Delish = 'Delish'
}

/** Boolean expression to compare columns of type "tag_enum_enum". All fields are combined with logical 'AND'. */
export type Tag_Enum_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Tag_Enum_Enum>;
  _in?: InputMaybe<Array<Tag_Enum_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Tag_Enum_Enum>;
  _nin?: InputMaybe<Array<Tag_Enum_Enum>>;
};

/** input type for inserting data into table "tag_enum" */
export type Tag_Enum_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  user_tags?: InputMaybe<User_Tags_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tag_Enum_Max_Fields = {
  __typename?: 'tag_enum_max_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tag_Enum_Min_Fields = {
  __typename?: 'tag_enum_min_fields';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tag_enum" */
export type Tag_Enum_Mutation_Response = {
  __typename?: 'tag_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tag_Enum>;
};

/** input type for inserting object relation for remote table "tag_enum" */
export type Tag_Enum_Obj_Rel_Insert_Input = {
  data: Tag_Enum_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Tag_Enum_On_Conflict>;
};

/** on conflict condition type for table "tag_enum" */
export type Tag_Enum_On_Conflict = {
  constraint: Tag_Enum_Constraint;
  update_columns?: Array<Tag_Enum_Update_Column>;
  where?: InputMaybe<Tag_Enum_Bool_Exp>;
};

/** Ordering options when selecting data from "tag_enum". */
export type Tag_Enum_Order_By = {
  description?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  user_tags_aggregate?: InputMaybe<User_Tags_Aggregate_Order_By>;
};

/** primary key columns input for table: tag_enum */
export type Tag_Enum_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "tag_enum" */
export enum Tag_Enum_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "tag_enum" */
export type Tag_Enum_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tag_enum" */
export enum Tag_Enum_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/**
 * This table holds information about an individual user
 *
 *
 * columns and relationships of "user"
 *
 */
export type User = {
  __typename?: 'user';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An object relationship */
  recipe?: Maybe<Recipe>;
  /** An array relationship */
  reviews: Array<Review>;
  /** An aggregate relationship */
  reviews_aggregate: Review_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_tags: Array<User_Tags>;
  /** An aggregate relationship */
  user_tags_aggregate: User_Tags_Aggregate;
};


/**
 * This table holds information about an individual user
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserReviewsArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


/**
 * This table holds information about an individual user
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserReviews_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Review_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Review_Order_By>>;
  where?: InputMaybe<Review_Bool_Exp>;
};


/**
 * This table holds information about an individual user
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserUser_TagsArgs = {
  distinct_on?: InputMaybe<Array<User_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Tags_Order_By>>;
  where?: InputMaybe<User_Tags_Bool_Exp>;
};


/**
 * This table holds information about an individual user
 *
 *
 * columns and relationships of "user"
 *
 */
export type UserUser_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Tags_Order_By>>;
  where?: InputMaybe<User_Tags_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  recipe?: InputMaybe<Recipe_Bool_Exp>;
  reviews?: InputMaybe<Review_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_tags?: InputMaybe<User_Tags_Bool_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  recipe?: InputMaybe<Recipe_Obj_Rel_Insert_Input>;
  reviews?: InputMaybe<Review_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_tags?: InputMaybe<User_Tags_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  recipe?: InputMaybe<Recipe_Order_By>;
  reviews_aggregate?: InputMaybe<Review_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_tags_aggregate?: InputMaybe<User_Tags_Aggregate_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/**
 * This table holds the tags that a user assigns to their recipe
 *
 *
 * columns and relationships of "user_tags"
 *
 */
export type User_Tags = {
  __typename?: 'user_tags';
  /** An object relationship */
  recipe: Recipe;
  recipe_id: Scalars['uuid'];
  tag: Tag_Enum_Enum;
  /** An object relationship */
  tag_enum: Tag_Enum;
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_tags" */
export type User_Tags_Aggregate = {
  __typename?: 'user_tags_aggregate';
  aggregate?: Maybe<User_Tags_Aggregate_Fields>;
  nodes: Array<User_Tags>;
};

/** aggregate fields of "user_tags" */
export type User_Tags_Aggregate_Fields = {
  __typename?: 'user_tags_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Tags_Max_Fields>;
  min?: Maybe<User_Tags_Min_Fields>;
};


/** aggregate fields of "user_tags" */
export type User_Tags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_tags" */
export type User_Tags_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Tags_Max_Order_By>;
  min?: InputMaybe<User_Tags_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_tags" */
export type User_Tags_Arr_Rel_Insert_Input = {
  data: Array<User_Tags_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<User_Tags_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_tags". All fields are combined with a logical 'AND'. */
export type User_Tags_Bool_Exp = {
  _and?: InputMaybe<Array<User_Tags_Bool_Exp>>;
  _not?: InputMaybe<User_Tags_Bool_Exp>;
  _or?: InputMaybe<Array<User_Tags_Bool_Exp>>;
  recipe?: InputMaybe<Recipe_Bool_Exp>;
  recipe_id?: InputMaybe<Uuid_Comparison_Exp>;
  tag?: InputMaybe<Tag_Enum_Enum_Comparison_Exp>;
  tag_enum?: InputMaybe<Tag_Enum_Bool_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_tags" */
export enum User_Tags_Constraint {
  /** unique or primary key constraint */
  UserTagsPkey = 'user_tags_pkey'
}

/** input type for inserting data into table "user_tags" */
export type User_Tags_Insert_Input = {
  recipe?: InputMaybe<Recipe_Obj_Rel_Insert_Input>;
  recipe_id?: InputMaybe<Scalars['uuid']>;
  tag?: InputMaybe<Tag_Enum_Enum>;
  tag_enum?: InputMaybe<Tag_Enum_Obj_Rel_Insert_Input>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Tags_Max_Fields = {
  __typename?: 'user_tags_max_fields';
  recipe_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_tags" */
export type User_Tags_Max_Order_By = {
  recipe_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Tags_Min_Fields = {
  __typename?: 'user_tags_min_fields';
  recipe_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_tags" */
export type User_Tags_Min_Order_By = {
  recipe_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_tags" */
export type User_Tags_Mutation_Response = {
  __typename?: 'user_tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Tags>;
};

/** on conflict condition type for table "user_tags" */
export type User_Tags_On_Conflict = {
  constraint: User_Tags_Constraint;
  update_columns?: Array<User_Tags_Update_Column>;
  where?: InputMaybe<User_Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "user_tags". */
export type User_Tags_Order_By = {
  recipe?: InputMaybe<Recipe_Order_By>;
  recipe_id?: InputMaybe<Order_By>;
  tag?: InputMaybe<Order_By>;
  tag_enum?: InputMaybe<Tag_Enum_Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_tags */
export type User_Tags_Pk_Columns_Input = {
  recipe_id: Scalars['uuid'];
  user_id: Scalars['uuid'];
};

/** select columns of table "user_tags" */
export enum User_Tags_Select_Column {
  /** column name */
  RecipeId = 'recipe_id',
  /** column name */
  Tag = 'tag',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_tags" */
export type User_Tags_Set_Input = {
  recipe_id?: InputMaybe<Scalars['uuid']>;
  tag?: InputMaybe<Tag_Enum_Enum>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_tags" */
export enum User_Tags_Update_Column {
  /** column name */
  RecipeId = 'recipe_id',
  /** column name */
  Tag = 'tag',
  /** column name */
  UserId = 'user_id'
}

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};
