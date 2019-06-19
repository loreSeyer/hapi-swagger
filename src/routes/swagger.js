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
    },
    {
        method: 'PUT',
        path: '/api/v1/edit',
        config: {
            description: 'Put hapi-swagger',
            notes: 'Ruta de prueba para editar hapi-swagger',
            tags: ['api', 'v1', 'rutas']
        },
        handler: (req, reply) => {
            return "Esta es una ruta de prueba";
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/remove',
        config: {
            description: 'Delete hapi-swagger',
            notes: 'Ruta de prueba para eliminar desde hapi-swagger',
            tags: ['api', 'v1', 'rutas']
        },
        handler: (req, reply) => {
            return "Esta es una ruta de prueba";
        }
    }
]