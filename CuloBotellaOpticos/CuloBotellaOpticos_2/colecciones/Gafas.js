db.createCollection("Gafas", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["marca", "grad_derecha", "grad_izquierda", "color_derecho", "color_izquierdo", "montura_tipo", "montura_color", "precio", "proveedor", "clientes"],
      "properties": {
        "marca": {
          "bsonType": "string"
        },
        "grad_derecha": {
          "bsonType": "decimal"
        },
        "grad_izquierda": {
          "bsonType": "decimal"
        },
        "color_derecho": {
          "bsonType": "string"
        },
        "color_izquierdo": {
          "bsonType": "string"
        },
        "montura_tipo": {
          "enum": ["flotante", "pasta", "metalica"]
        },
        "montura_color": {
          "bsonType": "string"
        },
        "precio": {
          "bsonType": "decimal"
        },
        "proveedor": {
          "bsonType": "array",
          "items": {
            "required": ["nombre_proveedor", "id_proveedor"],
            "properties": {
              "nombre_proveedor": {
                "bsonType": "string"
              },
              "id_proveedor": {
                "bsonType": "objectId"
              }
            }
          }  
        },
        "clientes": {
          "bsonType": "array",
          "items": {
            "title": "object",
            "required": ["nombre_cliente", "id_cliente"],
            "properties": {
              "nombre_cliente": {
                "bsonType": "string"
              },
              "id_cliente": {
                "bsonType": "objectId"
              }
            }
          }  
        }
      }  
    } 
  }
});
