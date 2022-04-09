const express = require('express')
const con = require('./db/mysqldb')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express()
app.use(express.json()); //transforma los datos de objetos a json, las consultas realizadas a la bd en el controlador las pasará a json
app.use(express.urlencoded({ extended: false })); //transforma los datos de un formulario html en json
app.get('/', (request, response) => {
    response.send('Hello Word')
})

/*const obtenerDatos = async () => {
    for (let i = 50; i < 56; i++) {

        const arrayDatos = await fetch(`https://restcountries.com/v2/callingcode/${i}`).then(res => res.json())
        // un valor
        // resto de código
        if (arrayDatos.status != '404') {
            console.log(arrayDatos[0].name)
            con.connect(function (err) {
                if (err) throw err;
                console.log("Connected!");
                var sql = "INSERT INTO paises(codigoPais, nombrePais,capitalPais,región,población,latitud,longitud) VALUES (?, ?, ?, ?, ?, ?, ?)";
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log("1 record inserted "+result);
                });
            });

        }
    }
    console.log("terminado ciclo for")

}
obtenerDatos(); */



app.listen(3000, () => {    //acá levanto al servidor en el puerto 3000
    console.log("Servidor en puerto 3000", 3000);
})
