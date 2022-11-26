import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  Date: any;
};

export type CathodeRayTube = {
  __typename?: 'CathodeRayTube';
  brand?: Maybe<Scalars['String']>;
  coaxial?: Maybe<Scalars['Int']>;
  component?: Maybe<Scalars['Int']>;
  composite?: Maybe<Scalars['Int']>;
  createdAt: Scalars['Date'];
  curved?: Maybe<Scalars['Boolean']>;
  highDefinition?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  modelNumber?: Maybe<Scalars['String']>;
  ntsc?: Maybe<Scalars['Boolean']>;
  pal?: Maybe<Scalars['Boolean']>;
  svideo?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['Date'];
  users: Array<User>;
  widescreen?: Maybe<Scalars['Boolean']>;
};

export type Message = {
  __typename?: 'Message';
  body: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  cathoderaytubes: Array<CathodeRayTube>;
  users: Array<User>;
};


export type QueryCathoderaytubesArgs = {
  composite?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  messages: Array<Message>;
  name: Scalars['String'];
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', name: string, messages: Array<{ __typename?: 'Message', body: string }> }> };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;