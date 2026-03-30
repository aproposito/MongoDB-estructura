{
  $jsonSchema: {
    bsonType: 'object',
    required: [
      'nombre',
      'apellido_1'
    ],
    properties: {
      nombre: {
        bsonType: 'string',
        description: 'Nombre del empleado.'
      },
      apellido_1: {
        bsonType: 'string',
        description: 'Primer apellido del empleado.'
      },
      apellido_2: {
        bsonType: 'string',
        description: 'Segundo apellido del empleado.'
      }
    }
  }
}