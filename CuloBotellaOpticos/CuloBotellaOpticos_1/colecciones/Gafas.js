db.createCollection("Gafas", {
  validator: {
    $jsonSchema: {
      "bsonType": "object",
      "required": ["marca", "grad_derecha", "grad_izquierda", "color_derecho", "color_izquierdo", "montura_tipo", "montura_color", "precio", "id_proveedores"],
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
        "id_proveedores": {
          "bsonType": "objectId"
        }
      }  
    } 
  }
});
