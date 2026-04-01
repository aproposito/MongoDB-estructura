db.createCollection("Proveedores", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["nombre", "direccion", "telefono", "fax", "nif"],
      "properties": {
        "nombre": {
          "bsonType": "string"
        },
        "direccion": {
          "bsonType": "array",
          "items": {
            "required": ["calle", "numero", "codigo_postal", "ciudad", "pais"],
            "properties": {
              "calle": {
                "bsonType": "string"
              },
              "numero": {
                "bsonType": "int"
              },
              "puerta": {
                "bsonType": "string"
              },
              "codigo_postal": {
                "bsonType": "string"
              },
              "ciudad": {
                "bsonType": "string"
              },
              "pais": {
                "bsonType": "string"
              }
            }
          }
        },
        "telefono": {
          "bsonType": "string"
        },
        "fax": {
          "bsonType": "string"
        },
        "nif": {
          "bsonType": "string"
        }
      }
    }
  }
});