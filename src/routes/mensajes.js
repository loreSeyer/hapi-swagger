const Joi=require("joi");
const request=require("request");
//CODE2
const men=require("../models/mensajes_model");
module.exports = [
    //Copy code//
    {
        method: 'GET',
        path: '/api/v1/get_mensajes',
        config: {
            description: 'Get hapi-swagger',
            notes: 'Ruta de prueba para obtener hapi-swagger',
            tags: ['api', 'Mensajes'],
            // validate: {
            //     payload: Joi.object({
            //         id:Joi.string().required()
            //     })
            // }
        },
        handler: (req, reply) => {
            return "prueba get";
        }
    },
    // Guide code//
    {
        method: 'POST',
        path: '/api/v1/add_mensajes',
        config: {
            description: 'Post hapi-swagger',
            notes: 'Ruta de prueba para agregar en hapi-swagger',
            tags: ['api','Mensajes']
        },
        handler: async (req, reply) => {
            return "Hola";
        }
    },
    {
        method: 'PUT',
        path: '/api/v1/edit_mensajes',
        config: {
            description: 'Put hapi-swagger',
            notes: 'Ruta de prueba para editar en hapi-swagger',
            tags: ['api', 'Mensajes']
        },
        handler: (req, reply) => {
            return "Esta es una ruta de prueba";
        }
    },
    {
        method: 'DELETE',
        path: '/api/v1/delete_mensajes',
        config: {
            description: 'Delete hapi-swagger',
            notes: 'Ruta de prueba para eliminar en hapi-swagger',
            tags: ['api', 'Mensajes']
        },
        handler: (req, reply) => {
            return "Esta es una ruta de prueba";
        }
    },


  ]



//Notas

//   {
//     method: 'POST',
//     path: '/api/v1/get_mensajes',
//     config: {
//         description: 'Get hapi-swagger',
//         notes: 'Ruta de prueba para obtener hapi-swagger',
//         tags: ['api', 'Mensajes'],
//         validate: {
//             payload: Joi.object({
//                 id:Joi.string().required()
//             })
//         }
//     },
//     handler: async (req, reply) => {
//         try {
//             filter={};
//             filter._id=req.payload.id;
//             console.log(filter);
//             return await men.findOne(filter);
//             //return men.find();
//         } catch (error) {
//             console.log(error);
//             return error; 
//         }
//     }
// },


// {
//     method: 'POST',
//     path: '/api/v1/add_mensajes',
//     config: {
//         description: 'Post hapi-swagger',
//         notes: 'Ruta de prueba para agregar en hapi-swagger',
//         tags: ['api','Mensajes']
//     },
//     handler: async (req, reply) => {
        
//         const mensaje=new men();
//         //Propiedades igual que modelo
//         mensaje.mensaje="Hola";
//         mensaje.numero="7222535467"
//         console.log(mensaje);
//         await  mensaje.save();
//         //group.save((err, group) => {});
//         return mensaje;
//     }
// },