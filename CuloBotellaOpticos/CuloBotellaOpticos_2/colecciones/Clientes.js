db.createCollection("Clientes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "direccion", "telefono", "email", "fecha_registro"],
      properties: {
        nombre: {
          bsonType: "string"
        },
        direccion: {
          bsonType: "object",
          required: ["calle", "numero", "codigo_postal", "ciudad", "provincia"],
          properties: {
            calle: {
              bsonType: "string"
            },
            numero: {
              bsonType: "int"
            },
            puerta: {
              bsonType: "string"
            },
            codigo_postal: {
              bsonType: "string"
            },
            ciudad: {
              bsonType: "string"
            },
            provincia: {
              bsonType: "string"
            }
          }
        },
        telefono: {
          bsonType: "string"
        },
        email: {
          bsonType: "string"
        },
        fecha_registro: {
          bsonType: "date"
        },
        recomendado_por: {
          bsonType: "objectId"
        }
      }
    }
  }
})