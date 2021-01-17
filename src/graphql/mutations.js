/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShelter = /* GraphQL */ `
  mutation CreateShelter(
    $input: CreateShelterInput!
    $condition: ModelShelterConditionInput
  ) {
    createShelter(input: $input, condition: $condition) {
      id
      name
      phone
      email
      vk
      facebook
      instagram
      city
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateShelter = /* GraphQL */ `
  mutation UpdateShelter(
    $input: UpdateShelterInput!
    $condition: ModelShelterConditionInput
  ) {
    updateShelter(input: $input, condition: $condition) {
      id
      name
      phone
      email
      vk
      facebook
      instagram
      city
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteShelter = /* GraphQL */ `
  mutation DeleteShelter(
    $input: DeleteShelterInput!
    $condition: ModelShelterConditionInput
  ) {
    deleteShelter(input: $input, condition: $condition) {
      id
      name
      phone
      email
      vk
      facebook
      instagram
      city
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createDoggie = /* GraphQL */ `
  mutation CreateDoggie(
    $input: CreateDoggieInput!
    $condition: ModelDoggieConditionInput
  ) {
    createDoggie(input: $input, condition: $condition) {
      id
      name
      age
      breed
      city
      sex
      image
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      shelter {
        id
        name
        phone
        email
        vk
        facebook
        instagram
        city
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateDoggie = /* GraphQL */ `
  mutation UpdateDoggie(
    $input: UpdateDoggieInput!
    $condition: ModelDoggieConditionInput
  ) {
    updateDoggie(input: $input, condition: $condition) {
      id
      name
      age
      breed
      city
      sex
      image
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      shelter {
        id
        name
        phone
        email
        vk
        facebook
        instagram
        city
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteDoggie = /* GraphQL */ `
  mutation DeleteDoggie(
    $input: DeleteDoggieInput!
    $condition: ModelDoggieConditionInput
  ) {
    deleteDoggie(input: $input, condition: $condition) {
      id
      name
      age
      breed
      city
      sex
      image
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      shelter {
        id
        name
        phone
        email
        vk
        facebook
        instagram
        city
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
