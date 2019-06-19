const Joi=require("joi");
module.exports = [
    {
        method: 'GET',
        path: '/api/v1/get',
        config: {
            description: 'Get hapi-swagger',
            notes: 'Ruta de prueba para obtener hapi-swagger',
            tags: ['api', 'v1', 'rutas']
        },
        handler: (req, reply) => {
            return "Esta es una ruta de prueba";
        }
    },
    {
        method: 'POST',
        path: '/api/v1/add',
        config: {
            description: 'Post hapi-swagger',
            notes: 'Ruta de prueba para registrar hapi-swagger',
            tags: ['api', 'v1', 'rutas']
        },
        handler: (req, reply) => {
            return "Esta es una ruta de prueba";
        }
    }
]