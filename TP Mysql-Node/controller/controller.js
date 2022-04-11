const conexion = require('../db/mysqldb')
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

// limpio tabla paises
conexion.query("DELETE FROM paises", function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    console.log(result);
});

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
obtenerDatos();

module.exports = { obtenerDatos };