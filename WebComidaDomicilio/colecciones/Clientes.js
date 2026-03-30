db.createCollection("Clientes", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "Clientes",
      "required": ["nombre", "apellido_1", "apellido_2", "direccion", "codigo_postal", "ciudad", "provincia", "telefono"],
      "properties": {
        "nombre": {
          "bsonType": "string"
        },
        "apellido_1": {
          "bsonType": "string"
        },
        "apellido_2": {
          "bsonType": "string"
        },
        "direccion": {
          "bsonType": "array",
          "items": {
            "bsonType": "object",
            "required": ["calle", "numero"],
            "properties": {
              "calle": {
                "bsonType": "string"
              },
              "numero": {
                "bsonType": "int"
              },
              "puerta": {
                "bsonType": "string"
              }
            }
          }  
        },
        "codigo_postal": {
          "bsonType": "string"
        },
        "ciudad": {
          "bsonType": "string"
        },
        "provincia": {
          "bsonType": "string"
        },
        "telefono": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
