/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateShelter = /* GraphQL */ `
  subscription OnCreateShelter {
    onCreateShelter {
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
export const onUpdateShelter = /* GraphQL */ `
  subscription OnUpdateShelter {
    onUpdateShelter {
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
export const onDeleteShelter = /* GraphQL */ `
  subscription OnDeleteShelter {
    onDeleteShelter {
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
export const onCreateDoggie = /* GraphQL */ `
  subscription OnCreateDoggie {
    onCreateDoggie {
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
export const onUpdateDoggie = /* GraphQL */ `
  subscription OnUpdateDoggie {
    onUpdateDoggie {
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
export const onDeleteDoggie = /* GraphQL */ `
  subscription OnDeleteDoggie {
    onDeleteDoggie {
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
