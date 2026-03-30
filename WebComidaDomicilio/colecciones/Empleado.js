db.createCollection("Empleado", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["nombre", "apellido_1", "apellido_2", "nif", "telefono", "cargo", "id_tiendas"],
      "properties": {
        "nombre": {
          "bsonType": "string"
        },
        "apellido_1": {
          "bsonType": "string"
        },
        "apellido_2": {
          "bsonType": "string"
        },
        "nif": {
          "bsonType": "string"
        },
        "telefono": {
          "bsonType": "string"
        },
        "cargo": {
          "bsonType": "string",
          "enum": ["cocinero", "repartidor"]
        },
        "id_tiendas": {
          "bsonType": "objectId"
        }
      }
    }
  }
});
