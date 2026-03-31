db.createCollection("canales", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["nombre", "descripcion", "fecha_creacion", "usuarios_suscritos_count", "id_usuarios"],
      "properties": {
        "nombre": {
          "bsonType": "string"
        },
        "descripcion": {
          "bsonType": "string"
        },
        "fecha_creacion": {
          "bsonType": "date"
        },
        "usuarios_suscritos_count": {
          "bsonType": "int"
        },
        "id_usuarios": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
