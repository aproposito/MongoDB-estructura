{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'marca',
      'grad_dcha',
      'grad_izda',
      'color_dcho',
      'color_izdo',
      'montura',
      'precio',
      'id_proveedor'
    ],
    properties: {
      marca: {
        bsonType: 'string',
        description: 'Marca de las gafas.'
      },
      grad_dcha: {
        bsonType: 'decimal',
        description: 'Graduación del cristal derecho.'
      },
      grad_izda: {
        bsonType: 'decimal',
        description: 'Graduación del cristal izquierdo.'
      },
      color_dcho: {
        bsonType: 'string',
        description: 'Color del cristal derecho.'
      },
      color_izdo: {
        bsonType: 'string',
        description: 'Color del cristal izquierdo.'
      },
      montura: {
        bsonType: 'string',
        'enum': [
          'flotante',
          'pasta',
          'metalica'
        ],
        description: 'se puede escoger entre tres tipos \'flotante\', \'pasta\', \'metálica\''
      },
      precio: {
        bsonType: 'decimal',
        description: 'Precio actual de las gafas.'
      },
      id_proveedor: {
        bsonType: 'objectId',
        description: 'ID del proveedor de las gafas.'
      }
    }
  }
}