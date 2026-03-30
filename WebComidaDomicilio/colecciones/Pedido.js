db.createCollection("Pedido", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["fecha_hora_pedido", "lineas_pedido", "precio_total", "tipo_pedido", "id_clientes", "id_tiendas"],
      "properties": {
        "fecha_hora_pedido": {
          "bsonType": "date"
        },
        "lineas_pedido": {
          "bsonType": "array",
          "items": {
            "bsonType": "object",
            "required": ["cantidad", "precio_unitario", "id_producto"],
            "properties": {
              "cantidad": {
                "bsonType": "int"
              },
              "precio_unitario": {
                "bsonType": "decimal"
              },
              "id_producto": {
                "bsonType": "objectId"
              }
            }
          }  
        },
        "precio_total": {
          "bsonType": "decimal"
        },
        "info_adicional": {
          "bsonType": "string"
        },
        "tipo_pedido": {
          "bsonType": "string",
          "enum": ["domicilio", "tienda"]
        },
        "fecha_hora_reparto": {
          "bsonType": "date",
          "description":"Solo si campo tipo_pedido = domicilio"
        },
        "id_clientes": {
          "bsonType": "objectId"
        },
        "id_tiendas": {
          "bsonType": "objectId"
        },
        "id_empleado": {
          "bsonType": "objectId",
            "description":"Solo si campo tipo_pedido = domicilio"
        }
      }  
    } 
  }
});
