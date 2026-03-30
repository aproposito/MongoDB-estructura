{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'id_cliente',
      'id_empleado',
      'fecha_hora_venta',
      'detalle_ventas'
    ],
    properties: {
      id_cliente: {
        bsonType: 'objectId',
        description: 'ID del cliente.'
      },
      id_empleado: {
        bsonType: 'objectId',
        description: 'ID del empleado que ha vendido las gafas.'
      },
      fecha_hora_venta: {
        bsonType: 'date',
        description: 'fecha y hora de la venta.'
      },
      detalle_ventas: {
        bsonType: 'array',
        items: {
          bsonType: 'object',
          required: [
            'id_gafa',
            'precio_venta'
          ],
          properties: {
            id_gafa: {
              bsonType: 'objectId',
              description: 'ID de la gafa vendida.'
            },
            precio_venta: {
              bsonType: 'decimal',
              description: 'Precio de la gafa en el momento de la venta.'
            }
          }
        }
      }
    }
  }
}