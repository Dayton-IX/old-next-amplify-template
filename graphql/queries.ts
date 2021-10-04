/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getManager = /* GraphQL */ `
  query GetManager($id: ID!) {
    getManager(id: $id) {
      id
      userSub
      firstName
      lastName
      birthdate
      phone
      role
      businessID
      createdAt
      updatedAt
    }
  }
`;
export const listManagers = /* GraphQL */ `
  query ListManagers(
    $filter: ModelManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userSub
        firstName
        lastName
        birthdate
        phone
        role
        businessID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const managerByUserSub = /* GraphQL */ `
  query ManagerByUserSub(
    $userSub: String
    $sortDirection: ModelSortDirection
    $filter: ModelManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    managerByUserSub(
      userSub: $userSub
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userSub
        firstName
        lastName
        birthdate
        phone
        role
        businessID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
