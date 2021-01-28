export const schema = {
    "models": {
        "Shelter": {
            "name": "Shelter",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "phone": {
                    "name": "phone",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "email": {
                    "name": "email",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "vk": {
                    "name": "vk",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "facebook": {
                    "name": "facebook",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "instagram": {
                    "name": "instagram",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": {
                        "enum": "City"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Doggies": {
                    "name": "Doggies",
                    "isArray": true,
                    "type": {
                        "model": "Doggie"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "shelterID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Shelters",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Doggie": {
            "name": "Doggie",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "age": {
                    "name": "age",
                    "isArray": false,
                    "type": {
                        "enum": "Age"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "breed": {
                    "name": "breed",
                    "isArray": false,
                    "type": {
                        "enum": "Breed"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "city": {
                    "name": "city",
                    "isArray": false,
                    "type": {
                        "enum": "City"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "image": {
                    "name": "image",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "shelter": {
                    "name": "shelter",
                    "isArray": false,
                    "type": {
                        "model": "Shelter"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "doggieShelterId"
                    }
                },
                "shelterID": {
                    "name": "shelterID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "sex": {
                    "name": "sex",
                    "isArray": false,
                    "type": {
                        "enum": "Sex"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Doggies",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byShelter",
                        "fields": [
                            "shelterID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Breed": {
            "name": "Breed",
            "values": [
                "MIX"
            ]
        },
        "Age": {
            "name": "Age",
            "values": [
                "PUP",
                "YOUNG",
                "ADULT",
                "SENIOR"
            ]
        },
        "City": {
            "name": "City",
            "values": [
                "SPB",
                "MSK",
                "EKB"
            ]
        },
        "Sex": {
            "name": "Sex",
            "values": [
                "MALE",
                "FEMALE"
            ]
        }
    },
    "nonModels": {},
    "version": "a1c6192b5866735ce6f69db735148a81"
};