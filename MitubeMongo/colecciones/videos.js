db.createCollection("videos", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["titulo", "descripcion", "tamanyo", "duracion_segundos", "nombre_archivo", "thumbnail", "reproducciones", "likes_count", "dislikes_count", "estado", "fecha_publicacion", "id_usuarios"],
      "properties": {
        "titulo": {
          "bsonType": "string"
        },
        "descripcion": {
          "bsonType": "string"
        },
        "tamanyo": {
          "bsonType": "long"
        },
        "duracion_segundos": {
          "bsonType": "int"
        },
        "nombre_archivo": {
          "bsonType": "string"
        },
        "thumbnail": {
          "bsonType": "string"
        },
        "reproducciones": {
          "bsonType": "int"
        },
        "likes_count": {
          "bsonType": "int"
        },
        "dislikes_count": {
          "bsonType": "int"
        },
        "estado": {
          "enum": ["publico", "privado", "oculto"]
        },
        "etiquetas": {
          "bsonType": "array",
          "items": {
            "bsonType": "string"
          }
        },
        "fecha_publicacion": {
          "bsonType": "date"
        },
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
