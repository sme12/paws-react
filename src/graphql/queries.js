/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listShelters = /* GraphQL */ `
  query ListShelters(
    $filter: ModelShelterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listShelters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getShelter = /* GraphQL */ `
  query GetShelter($id: ID!) {
    getShelter(id: $id) {
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
export const syncShelters = /* GraphQL */ `
  query SyncShelters(
    $filter: ModelShelterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncShelters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getDoggie = /* GraphQL */ `
  query GetDoggie($id: ID!) {
    getDoggie(id: $id) {
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
export const listDoggies = /* GraphQL */ `
  query ListDoggies(
    $filter: ModelDoggieFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDoggies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDoggies = /* GraphQL */ `
  query SyncDoggies(
    $filter: ModelDoggieFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDoggies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      }
      nextToken
      startedAt
    }
  }
`;
