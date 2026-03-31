db.createCollection("comentarios", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["comentario", "fecha_creacion", "likes_count", "dislikes_count", "id_usuarios", "id_videos"],
      "properties": {
        "comentario": {
          "bsonType": "string"
        },
        "fecha_creacion": {
          "bsonType": "date"
        },
        "likes_count": {
          "bsonType": "int"
        },
        "dislikes_count": {
          "bsonType": "int"
        },
        "id_usuarios": {
          "bsonType": "objectId"
        },
        "id_videos": {
          "bsonType": "objectId"
        },
        "id_comentario_respondido": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
