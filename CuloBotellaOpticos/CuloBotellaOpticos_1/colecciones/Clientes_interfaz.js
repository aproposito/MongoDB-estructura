db.createCollection("Clientes_interfaz", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["nombre", "direccion", "telefono", "email", "fecha_registro", "pedido"],
      "properties": {
        "nombre": {
          "bsonType": "string"
        },
        "direccion": {
          "bsonType": "array",
          "items": {
            "required": ["calle", "numero", "codigo_postal", "ciudad", "provincia"],
            "properties": {
              "calle": {
                "bsonType": "string"
              },
              "numero": {
                "bsonType": "int"
              },
              "puerta": {
                "bsonType": "string"
              },
              "codigo_postal": {
                "bsonType": "string"
              },
              "ciudad": {
                "bsonType": "string"
              },
              "provincia": {
                "bsonType": "string"
              }
            }
          }  
        },
        "telefono": {
          "bsonType": "string"
        },
        "email": {
          "bsonType": "string"
        },
        "fecha_registro": {
          "bsonType": "date"
        },
        "recomendado_por": {
          "bsonType": "objectId"
        },
        "pedido": {
          "bsonType": "array",
          "items": {
            "required": ["fecha_pedido", "item_pedido", "id_empleado_pedido"],
            "properties": {
              "fecha_pedido": {
                "bsonType": "date"
              },
              "item_pedido": {
                "bsonType": "array",
                "items": {
                  "required": ["marca", "grad_derecha", "grad_izquierda", "color_derecho", "color_izquierdo", "montura", "precio_venta", "id_gafa"],
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
                    "montura": {
                      "enum": ["flotante", "pasta", "metalica"]
                    },
                    "precio_venta": {
                      "bsonType": "decimal"
                    },
                    "id_gafa": {
                      "bsonType": "objectId"
                    }
                  }
                }  
              },
              "id_empleado_pedido": {
                "bsonType": "objectId"
              }
            }
          }  
        }
      }  
    } 
  }
});
