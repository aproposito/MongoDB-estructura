db.createCollection("Empleados", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["nombre", "apellido_1"],
      "properties": {
        "nombre": {
          "bsonType": "string"
        },
        "apellido_1": {
          "bsonType": "string"
        },
        "apellido_2": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
