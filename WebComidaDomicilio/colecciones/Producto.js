db.createCollection("Producto", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["tipo", "nombre", "descripcion", "imagen", "precio"],
      "properties": {
        "tipo": {
          "bsonType": "string",
          "enum": ["pizza", "hamburguesa", "bebida"]
        },
        "nombre": {
          "bsonType": "string"
        },
        "descripcion": {
          "bsonType": "string"
        },
        "imagen": {
          "bsonType": "string"
        },
        "precio": {
          "bsonType": "decimal"
        },
        "id_categoria": {
          "bsonType": "objectId",
          "description":"solo si tipo = pizza"
        }
      }  
    } 
  }
}
);
