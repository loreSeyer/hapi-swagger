var  mongoose= require('mongoose');
var schema = mongoose.Schema;

var msjSchema= new schema({
    mensaje: String,
    numero: String
});

module.exports= mongoose.model('mensajes',msjSchema)