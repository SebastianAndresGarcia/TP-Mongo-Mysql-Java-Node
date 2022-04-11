const express = require('express')
const conexion = require('./db/mysqldb')


const app = express()
app.use(express.json()); //transforma los datos de objetos a json, las consultas realizadas a la bd en el controlador las pasará a json
app.use(express.urlencoded({ extended: false })); //transforma los datos de un formulario html en json
app.get('/', (request, response) => {
    response.send('Hello Word')
})

const obtener = require('./controller/controller')
/*
const obtenerDatos = async () => {
    for (let i = 50; i < 60; i++) {

        const arrayDatos = await fetch(`https://restcountries.com/v2/callingcode/${i}`).then(res => res.json())
        // un valor
        // resto de código
        if (arrayDatos.status != '404') {
            console.log(arrayDatos[0].name)
            var codigo = arrayDatos[0].callingCodes[0]
            if (codigoanterior === codigo)
                codigo = arrayDatos[0].callingCodes[1]
            var sql = `INSERT INTO paises(codigoPais, nombrePais,capitalPais,region,poblacion,latitud,longitud) VALUES (?);`;
            let values = //[56, 'peru', 'Lima', 'America', 10000000, 45.0, 45.9]
                [codigo, arrayDatos[0].name, arrayDatos[0].capital, arrayDatos[0].region, arrayDatos[0].population, arrayDatos[0].latlng[0], arrayDatos[0].latlng[1]];
            var codigoanterior = codigo;
            conexion.query(sql, [values], function (err, result) {
                if (err) throw err;
                console.log("1 record inserted " + result);
            });
        }
    }
    console.log("terminado ciclo for")
}
obtenerDatos(); */


app.listen(3000, () => {    //acá levanto al servidor en el puerto 3000
    console.log("Servidor en puerto 3000", 3000);
})
