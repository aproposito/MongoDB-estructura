db.createCollection("suscripciones", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "title": "suscripciones",
      "required": ["id_usuarios", "id_canales"],
      "properties": {
        "id_usuarios": {
          "bsonType": "objectId"
        },
        "id_canales": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
