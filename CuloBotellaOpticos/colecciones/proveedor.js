{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'nombre',
      'direccion',
      'email',
      'telefono',
      'fax',
      'nif'
    ],
    properties: {
      nombre: {
        bsonType: 'string',
        description: 'Nombre del proveedor.'
      },
      email: {
        bsonType: 'string',
        description: 'Dirección de correo electrónico del proveedor'
      },
      telefono: {
        bsonType: 'string',
        description: 'Teléfono del proveedor. Fijo o móvil'
      },
      direccion: {
        bsonType: 'object',
        required: [
          'calle',
          'numero',
          'piso',
          'cp',
          'ciudad',
          'pais'
        ],
        properties: {
          calle: {
            bsonType: 'string'
          },
          numero: {
            bsonType: [
              'int'
            ]
          },
          piso: {
            bsonType: [
              'int'
            ]
          },
          puerta: {
            bsonType: 'string'
          },
          cp: {
            bsonType: 'string'
          },
          ciudad: {
            bsonType: 'string'
          },
          pais: {
            bsonType: 'string'
          }
        },
        description: 'Dirección completa del proveedo, solo puerta es opcional'
      },
      fax: {
        bsonType: 'string',
        description: 'Fax del proveedor'
      },
      nif: {
        bsonType: 'string',
        description: 'NIF del proveedor'
      }
    }
  }
}