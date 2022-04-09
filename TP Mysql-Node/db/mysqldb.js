//https://www.geeksforgeeks.org/node-js-mysql-insert-into-table/    , ver esto para modularizar

var mysql = require('mysql');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'paises_db',
    port: 3306,
    connectionLimit: 100 //100 es el valor por defecto
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

});
const obtenerDatos = async () => {
    for (let i = 50; i < 56; i++) {

        const arrayDatos = await fetch(`https://restcountries.com/v2/callingcode/${i}`).then(res => res.json())
        // un valor
        // resto de código
        if (arrayDatos.status != '404') {
            console.log(arrayDatos[0].name)
            var sql = `INSERT INTO paises(codigoPais, nombrePais,capitalPais,region,poblacion,latitud,longitud) VALUES (?);`;
            let values = //[56, 'peru', 'Lima', 'America', 10000000, 45.0, 45.9]
            [arrayDatos[0].callingCodes,arrayDatos[0].name,arrayDatos[0].capital,arrayDatos[0].region,arrayDatos[0].population,arrayDatos[0].latlng[0],arrayDatos[0].latlng[1]];
            con.query(sql, [values], function (err, result) {
                if (err) throw err;
                console.log("1 record inserted " + result);
            });
        }
    }
    console.log("terminado ciclo for")
}
obtenerDatos();
module.exports = con;