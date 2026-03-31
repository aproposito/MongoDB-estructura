db.createCollection("valoraciones", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["valoracion", "fecha_valoracion", "id_usuarios", "id_videos"],
      "properties": {
        "valoracion": {
          "enum": ["like", "dislike"]
        },
        "fecha_valoracion": {
          "bsonType": "date"
        },
        "id_usuarios": {
          "bsonType": "objectId"
        },
        "id_videos": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
