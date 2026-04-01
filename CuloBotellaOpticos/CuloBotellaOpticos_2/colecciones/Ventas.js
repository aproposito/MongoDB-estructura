db.createCollection("Ventas", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["id_cliente", "id_empleado", "fecha_venta", "detalle_venta"],
      "properties": {
        "id_cliente": {
          "bsonType": "objectId"
        },
        "id_empleado": {
          "bsonType": "objectId"
        },
        "fecha_venta": {
          "bsonType": "date"
        },
        "detalle_venta": {
          "bsonType": "array",
          "items": {
            "required": ["precio_venta"],
            "properties": {
              "id_gafa": {
                "bsonType": "objectId"
              },
              "precio_venta": {
                "bsonType": "decimal"
              }
            }
          }  
        }
      }  
    } 
  }
});
