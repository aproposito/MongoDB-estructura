db.createCollection("Tiendas", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["direccion", "codigo_postal", "ciudad", "provincia"],
      "properties": {
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
        }
      }  
    } 
  }
});
