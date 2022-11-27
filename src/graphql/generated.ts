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

export type Message = {
  __typename?: 'Message';
  body: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  televisions: Array<Television>;
  users: Array<User>;
};


export type QueryTelevisionsArgs = {
  composite?: InputMaybe<Scalars['Int']>;
};

export type Television = {
  __typename?: 'Television';
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

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  messages: Array<Message>;
  name: Scalars['String'];
};

export type GetTelevisionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTelevisionsQuery = { __typename?: 'Query', televisions: Array<{ __typename?: 'Television', brand?: string | null, modelNumber?: string | null, composite?: number | null, svideo?: number | null, component?: number | null, widescreen?: boolean | null }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', name: string, messages: Array<{ __typename?: 'Message', body: string }> }> };


export const GetTelevisionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTelevisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"televisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"modelNumber"}},{"kind":"Field","name":{"kind":"Name","value":"composite"}},{"kind":"Field","name":{"kind":"Name","value":"svideo"}},{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"widescreen"}}]}}]}}]} as unknown as DocumentNode<GetTelevisionsQuery, GetTelevisionsQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;