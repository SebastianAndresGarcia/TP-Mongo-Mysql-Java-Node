const express = require('express')
require('./db/connection')


const app = express()
app.use(express.json()); //transforma los datos de objetos a json, las consultas realizadas a la bd en el controlador las pasará a json
app.use(express.urlencoded({extended:false})); //transforma los datos de un formulario html en json
app.get('/',(request, response)=>{
    response.send('Hello Word')
})


app.listen(3000, () => {    //acá levanto al servidor en el puerto 3000
    console.log("Servidor en puerto 3000", 3000); 
})
/*const getFetch = async(callingCode) => {
    const res = await fetch(`https://restcountries.com/v2/callingcode/${callingCode}`)
    const data = await res.json()
    return data;
}*/
/*for(let i=1;i<301;i++){
    const objeto=`https://restcountries.com/v2/callingcode/${i}`;
    if(objeto!=null){
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            //var dbo = db.db("paises_db");
            
            dbo.collection("paises").insertOne(objeto, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
              console.log(objeto);
              db.close();
            });
          });
    }
    
} */