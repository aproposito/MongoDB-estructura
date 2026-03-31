db.createCollection("playlist", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["nombre", "fecha_creacion", "estado", "id_usuarios"],
      "properties": {
        "nombre": {
          "bsonType": "string"
        },
        "fecha_creacion": {
          "bsonType": "date"
        },
        "estado": {
          "enum": ["pública", "privada"]
        },
        "id_usuarios": {
          "bsonType": "objectId"
        },
        "id_videos": {
          "bsonType": "array",
          "items": {
            "bsonType": "objectId"
          }
        }
      }  
    } 
  }
});
