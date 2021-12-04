const mongoose=require('mongoose');
//importar variable de entorno 
require('dotenv').config({path:'variables.env'});
mongoose.connect(process.env.DB_URL, {
useNewUrlParser: true,
//useCreateIndex: true,
useUnifiedTopology: true,
//useFindAndModify: false,
},(err,res)=>{
if(err){
throw err;
}else{
console.log('La conexion a la base de datos fue correcta...')
}
});