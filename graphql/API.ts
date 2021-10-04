/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateManagerInput = {
  id?: string | null,
  userSub: string,
  firstName: string,
  lastName: string,
  birthdate: string,
  phone: string,
  role: ManagerRole,
  businessID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export enum ManagerRole {
  MANAGER = "MANAGER",
  OWNER = "OWNER",
  ADMIN = "ADMIN",
  EMPLOYEE = "EMPLOYEE",
}


export type ModelManagerConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  role?: ModelManagerRoleInput | null,
  businessID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelManagerConditionInput | null > | null,
  or?: Array< ModelManagerConditionInput | null > | null,
  not?: ModelManagerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelManagerRoleInput = {
  eq?: ManagerRole | null,
  ne?: ManagerRole | null,
};

export type Manager = {
  __typename: "Manager",
  id: string,
  userSub: string,
  firstName: string,
  lastName: string,
  birthdate: string,
  phone: string,
  role: ManagerRole,
  businessID?: string | null,
  createdAt: string,
  updatedAt?: string | null,
};

export type UpdateManagerInput = {
  id: string,
  userSub?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  birthdate?: string | null,
  phone?: string | null,
  role?: ManagerRole | null,
  businessID?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteManagerInput = {
  id: string,
};

export type ModelManagerFilterInput = {
  id?: ModelIDInput | null,
  userSub?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  birthdate?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  role?: ModelManagerRoleInput | null,
  businessID?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelManagerFilterInput | null > | null,
  or?: Array< ModelManagerFilterInput | null > | null,
  not?: ModelManagerFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelManagerConnection = {
  __typename: "ModelManagerConnection",
  items?:  Array<Manager | null > | null,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateManagerMutationVariables = {
  input: CreateManagerInput,
  condition?: ModelManagerConditionInput | null,
};

export type CreateManagerMutation = {
  createManager?:  {
    __typename: "Manager",
    id: string,
    userSub: string,
    firstName: string,
    lastName: string,
    birthdate: string,
    phone: string,
    role: ManagerRole,
    businessID?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type UpdateManagerMutationVariables = {
  input: UpdateManagerInput,
  condition?: ModelManagerConditionInput | null,
};

export type UpdateManagerMutation = {
  updateManager?:  {
    __typename: "Manager",
    id: string,
    userSub: string,
    firstName: string,
    lastName: string,
    birthdate: string,
    phone: string,
    role: ManagerRole,
    businessID?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type DeleteManagerMutationVariables = {
  input: DeleteManagerInput,
  condition?: ModelManagerConditionInput | null,
};

export type DeleteManagerMutation = {
  deleteManager?:  {
    __typename: "Manager",
    id: string,
    userSub: string,
    firstName: string,
    lastName: string,
    birthdate: string,
    phone: string,
    role: ManagerRole,
    businessID?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type GetManagerQueryVariables = {
  id: string,
};

export type GetManagerQuery = {
  getManager?:  {
    __typename: "Manager",
    id: string,
    userSub: string,
    firstName: string,
    lastName: string,
    birthdate: string,
    phone: string,
    role: ManagerRole,
    businessID?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type ListManagersQueryVariables = {
  filter?: ModelManagerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListManagersQuery = {
  listManagers?:  {
    __typename: "ModelManagerConnection",
    items?:  Array< {
      __typename: "Manager",
      id: string,
      userSub: string,
      firstName: string,
      lastName: string,
      birthdate: string,
      phone: string,
      role: ManagerRole,
      businessID?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ManagerByUserSubQueryVariables = {
  userSub?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelManagerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ManagerByUserSubQuery = {
  managerByUserSub?:  {
    __typename: "ModelManagerConnection",
    items?:  Array< {
      __typename: "Manager",
      id: string,
      userSub: string,
      firstName: string,
      lastName: string,
      birthdate: string,
      phone: string,
      role: ManagerRole,
      businessID?: string | null,
      createdAt: string,
      updatedAt?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateManagerSubscription = {
  onCreateManager?:  {
    __typename: "Manager",
    id: string,
    userSub: string,
    firstName: string,
    lastName: string,
    birthdate: string,
    phone: string,
    role: ManagerRole,
    businessID?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateManagerSubscription = {
  onUpdateManager?:  {
    __typename: "Manager",
    id: string,
    userSub: string,
    firstName: string,
    lastName: string,
    birthdate: string,
    phone: string,
    role: ManagerRole,
    businessID?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteManagerSubscription = {
  onDeleteManager?:  {
    __typename: "Manager",
    id: string,
    userSub: string,
    firstName: string,
    lastName: string,
    birthdate: string,
    phone: string,
    role: ManagerRole,
    businessID?: string | null,
    createdAt: string,
    updatedAt?: string | null,
  } | null,
};
