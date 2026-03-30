db.createCollection("Categoria", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["nombre"],
      "properties": {
        "nombre": {
          "bsonType": "string"
        }
      }  
    } 
  }
});
