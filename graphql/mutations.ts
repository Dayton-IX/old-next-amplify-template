/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createManager = /* GraphQL */ `
  mutation CreateManager(
    $input: CreateManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    createManager(input: $input, condition: $condition) {
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
export const updateManager = /* GraphQL */ `
  mutation UpdateManager(
    $input: UpdateManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    updateManager(input: $input, condition: $condition) {
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
export const deleteManager = /* GraphQL */ `
  mutation DeleteManager(
    $input: DeleteManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    deleteManager(input: $input, condition: $condition) {
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
