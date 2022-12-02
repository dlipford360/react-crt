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

export type Mutation = {
  __typename?: 'Mutation';
  register: User;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
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
  curved?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  diagonalInches?: Maybe<Scalars['Int']>;
  digitalconverter?: Maybe<Scalars['Boolean']>;
  dvdPlayback?: Maybe<Scalars['Boolean']>;
  dvi?: Maybe<Scalars['Int']>;
  hdmi?: Maybe<Scalars['Int']>;
  highDefinition?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  modelNumber?: Maybe<Scalars['String']>;
  ntsc?: Maybe<Scalars['Boolean']>;
  pal?: Maybe<Scalars['Boolean']>;
  scart?: Maybe<Scalars['Int']>;
  stereoAudio?: Maybe<Scalars['Boolean']>;
  svideo?: Maybe<Scalars['Int']>;
  televisionPictures: Array<TelevisionPicture>;
  tvl?: Maybe<Scalars['Int']>;
  vcrPlayback?: Maybe<Scalars['Boolean']>;
  vga?: Maybe<Scalars['Int']>;
  widescreen?: Maybe<Scalars['Boolean']>;
  yearMade?: Maybe<Scalars['String']>;
};

export type TelevisionPicture = {
  __typename?: 'TelevisionPicture';
  id: Scalars['ID'];
  television: Television;
  url: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  messages: Array<Message>;
  name?: Maybe<Scalars['String']>;
};

export type GetTelevisionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTelevisionsQuery = { __typename?: 'Query', televisions: Array<{ __typename?: 'Television', brand?: string | null, modelNumber?: string | null, composite?: number | null, svideo?: number | null, component?: number | null, widescreen?: boolean | null, vcrPlayback?: boolean | null, dvdPlayback?: boolean | null, curved?: boolean | null, coaxial?: number | null, diagonalInches?: number | null, yearMade?: string | null }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', name?: string | null, messages: Array<{ __typename?: 'Message', body: string }> }> };


export const GetTelevisionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTelevisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"televisions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"brand"}},{"kind":"Field","name":{"kind":"Name","value":"modelNumber"}},{"kind":"Field","name":{"kind":"Name","value":"composite"}},{"kind":"Field","name":{"kind":"Name","value":"svideo"}},{"kind":"Field","name":{"kind":"Name","value":"component"}},{"kind":"Field","name":{"kind":"Name","value":"widescreen"}},{"kind":"Field","name":{"kind":"Name","value":"vcrPlayback"}},{"kind":"Field","name":{"kind":"Name","value":"dvdPlayback"}},{"kind":"Field","name":{"kind":"Name","value":"curved"}},{"kind":"Field","name":{"kind":"Name","value":"coaxial"}},{"kind":"Field","name":{"kind":"Name","value":"diagonalInches"}},{"kind":"Field","name":{"kind":"Name","value":"yearMade"}}]}}]}}]} as unknown as DocumentNode<GetTelevisionsQuery, GetTelevisionsQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"messages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"body"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;