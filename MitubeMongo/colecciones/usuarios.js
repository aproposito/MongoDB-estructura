db.createCollection("usuarios", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["nombre_usuario", "email", "password", "fecha_nacimiento", "sexo", "pais ", "codigo_postal"],
      "properties": {
        "nombre_usuario": {
          "bsonType": "string"
        },
        "email": {
          "bsonType": "string"
        },
        "password": {
          "bsonType": "string"
        },
        "fecha_nacimiento": {
          "bsonType": "date"
        },
        "sexo": {
          "enum": ["Masculino", "Femenino"]
        },
        "pais": {
          "bsonType": "string"
        },
        "codigo_postal": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
