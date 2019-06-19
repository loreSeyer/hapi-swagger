const Joi=require('joi');
module.exports=[
    {
        method: 'GET',
        path: '/api/v1/get_mensajes',
        config: {
            description: 'Get mensajes',
            notes: 'Ruta de prueba para obtener mensajes',
            tags: ['api', 'v1', 'rutas']
        },
        handler: (req, reply) => {
            return "Esta es una ruta de prueba para mensajes";
        }
    }
]