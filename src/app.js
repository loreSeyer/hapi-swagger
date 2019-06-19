//console.log("Hola mundo en node");
const Hapi = require('hapi');
const routes = require("./routes/index");
const mongoose= require("mongoose");
const Ejs=require("ejs");
const jwt2=require('hapi-auth-jwt2');

//NO COPIAR---------------------------------------------------------------------------
//const validate = require('./utils/validation').validate;
//const publicCert = require('./utils/validation').publicCert;
//-------------------------------------------------------------------------------------

//swagger
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
// mongoose.connect('mongodb://localhost/sms')
//     .then(db => console.log('db connected'))
//     .catch(err=> console.log(err));

const server = Hapi.server({
  port: 3003,
  host: 'localhost',
  app: {},
  routes: {} //utilizable para vistas
});
const iniciarServer = async () => {
  try {

    await server.register(Vision);
    server.views({
          engines: { ejs: Ejs },
          relativeTo: __dirname,
          path: './views'
      });

    //swagger
    await server.register([
      Inert,
      Vision,
      {
        plugin: HapiSwagger,
        options: {
          host: 'localhost:3003',
          info: {
            title: 'Documentación hapi',
            version: '1.0.0'
          },
          sortEndpoints: 'ordered',
          grouping: 'tags'
        }
      }
    ]);
    //NO COPIAR-----------------------------------------------------------------------
    // await server.register(jwt2);
    // server.auth.strategy('jwt', 'jwt',
    // { key: publicCert,
    //     validate: validate,
    //     verifyOptions: { algorithms: [ 'RS512' ] }
    // });
    // server.auth.default('jwt');
    //-------------------------------------------------------------------------------
    await server.route(routes);
    await server.start();
    console.log(`Servidor corriendo en: ${server.info.uri}`);
  } catch (error) {
    console.log('Error al iniciar el servidor Hapi'+error);
  }
};
iniciarServer();
