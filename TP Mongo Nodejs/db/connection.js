var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/paises_db";
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

/*
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    var dbo = db.db("paises_db");
    dbo.collection("paises").deleteMany({}, function (err, obj) {
        if (err) throw err;
        console.log("document(s) deleted");
        db.close();
    });

});


const obtenerDatos = async () => {
    for (let i = 0; i < 301; i++) {

        const arrayDatos = await fetch(`https://restcountries.com/v2/callingcode/${i}`).then(res => res.json())
        // un valor
        // resto de código
        if (arrayDatos.status != '404') {
            //console.log(arrayDatos)
            MongoClient.connect(url, function (err, db) {

                if (err) throw err;
                var dbo = db.db("paises_db");
                dbo.collection("paises").insertOne(
                    {
                        name: arrayDatos[0].name,
                        callingCodes: arrayDatos[0].callingCodes,
                        capital: arrayDatos[0].capital,
                        region: arrayDatos[0].region,
                        population: arrayDatos[0].population,
                        latitud: arrayDatos[0].latlng[0],
                        longitud: arrayDatos[0].latlng[1],
                        area: arrayDatos[0].area
                    }, function (err, res) {
                        if (err) throw err;
                        console.log("1 document inserted");

                        db.close();
                    });


            });
        }
    }
    console.log("terminado ciclo for")
    paisesAmericanos();
    todosMenosAfrica();
    paisesAmericanosPopulosos();
    cambioEgipto();
    eliminar258();
    poblacionEntre();
    ordenadospornombre();
    metodoskip();
}
obtenerDatos();  */


//Codifique un método que seleccione los documentos de la colección países donde la región sea
//Americas. Muestre el resultado por pantalla o consola.
const paisesAmericanos = async () => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("paises_db");
        dbo.collection("paises").find({ region: 'Americas' }).toArray(function (err, result) {
            if (err) throw err;
            for (let i = 0; i < result.length; i++)
                console.log("5.1)Paises de America: " + result[i].name);

            db.close();
        });
    });
}
//Codifique un método que seleccione los documentos de la colección países donde la región sea
//Americas y la población sea mayor a 100000000. Muestre el resultado por pantalla o consola.
const paisesAmericanosPopulosos = async () => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("paises_db");
        var query = { region: 'Americas', population: { $gt: 100000000 } };
        dbo.collection("paises").find(query).toArray(function (err, result) {
            if (err) throw err;
            for (let i = 0; i < result.length; i++)
                console.log("5.2)Paises de America con mas de 100millones de habitantes: " + result[i].name + " - Población: " + result[i].population);

            db.close();
        });
    });
}

//Codifique un método que seleccione los documentos de la colección países donde la región sea
//distinto de Africa. (investigue $ne). Muestre el resultado por pantalla o consola.
const todosMenosAfrica = async () => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("paises_db");
        dbo.collection("paises").find({ region: { $ne: 'Africa' } }).toArray(function (err, result) {
            if (err) throw err;
            for (let i = 0; i < result.length; i++)
                console.log("5.3)Todos menos África: " + result[i].name + " - Región: " + result[i].region);

            db.close();
        });
    });
}
//Codifique un método que actualice el documento de la colección países donde el name sea Egypt,
//cambiando el name a “Egipto” y la población a 95000000
const cambioEgipto = async () => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("paises_db");
        var myquery = { name: "Egypt" };
        var newvalues = { $set: { name: "Egipto", population: 95000000 } };
        dbo.collection("paises").updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("5.4) Egipto updated");
            db.close();
        });
    });
}
//Codifique un método que elimine el documento de la colección países donde el código del país sea 258
const eliminar258 = async () => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("paises_db");
        var myquery = { callingCodes: '7'};
        dbo.collection("paises").deleteOne(myquery, function (err, obj) {
            if (err) throw err;
            console.log("5.5) Eliminado codigo 258");
            db.close();
        });
    });
}
//Describa que sucede al ejecutar el método drop() sobre una colección y sobre una base de datos.
/**El metodo Drop Elimina una colección o base de datos */

//Codifique un método que seleccione los documentos de la colección países cuya población sea
//mayor a 50000000 y menor a 150000000. Muestre el resultado por pantalla o consola.
const poblacionEntre = async () => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("paises_db");
        var query = { $and: [{ population: { $gt: 50000000 } }, { population: { $lt: 150000000 } }] }
        dbo.collection("paises").find(query).toArray(function (err, result) {
            if (err) throw err;
            for (let i = 0; i < result.length; i++)
                console.log("5.7) Población entre 50000000 y 150000000: " + result[i].name + " - Población: " + result[i].population);

            db.close();
        });
    });
}

//Codifique un método que seleccione los documentos de la colección países ordenados por nombre
//(name) en forma Ascendente. sort(). Muestre el resultado por pantalla o consola.
const listaAlfabetica = async () => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("paises_db");
        var mysort = { name: 1 };
        dbo.collection("paises").find().sort(mysort).toArray(function (err, result) {
            if (err) throw err;
            for (let i = 0; i < result.length; i++)
                console.log("5.8) Lista alfabética países: " + result[i].name);
            db.close();
        });
    });
}
//Describa que sucede al ejecutar el método skip() sobre una colección. Ejemplifique con la colección países.
/**El método skip(n) muestra todos los elementos posteriores a 'n'. Si le pongo un limit, mostrará los elementos
 * entre n y el límite*/
const metodoskip = async () => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("paises_db");
        dbo.collection("paises").find({}).skip(100).toArray(function (err, result) {
            if (err) throw err;
            for (let i = 0; i < result.length; i++)
                console.log("5.9) Metodo Skip: N° " + (i + 1) + ") " + result[i].name + " callingCode: " + result[i].callingCodes);
            db.close();
        });
    });
}
//Describa y ejemplifique como el uso de expresiones regulares en Mongo puede reemplazar el uso de la cláusula LIKE de SQL.
const metodoLike = async () => {
    console.log("entra al metodolike")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        const busqueda = "Ar";
        var dbo = db.db("paises_db");
        dbo.collection("paises").find({ name: { $regex: busqueda } }).toArray(function (err, result) {
            if (err) throw err;
            for (let i = 0; i < result.length; i++)
                console.log("5.10) Metodo Like: paises que contienen " + busqueda + ": " + result[i].name);
            db.close();
        });
    });
}

//Cree un nuevo índice para la colección países asignando el campo código como índice. investigue createIndex())
const crearIndex = async () => {
    console.log("entra a crearIndex")
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        
        var dbo = db.db("paises_db");
        dbo.collection("paises").createIndex( { codigo : 1 }, function(err, result) {
            if (err) throw err;
            console.log(result);
            //callback(result);
            
            db.close();
        });
    });
}

//Describa como se realiza un backup de la base de datos mongo países_db.
/* Para realizar la copia de seguridad de la base de datos de MongoDB, se utiliza la utilidad mongodump,
que se encuentra en el directorio bin. Esta utilidad realiza la copia de seguridad de todos los datos
en la carpeta «dump» de la ubicación predeterminada /bin/dump. MongoDB utiliza el puerto 27017 de forma 
predeterminada. Se puede utilizar la utilidad mongodump para realizar copias de seguridad en caliente 
(online) o en frío (fuera de línea).*/

paisesAmericanos();
paisesAmericanosPopulosos();
todosMenosAfrica();
cambioEgipto();
eliminar258();
poblacionEntre();
listaAlfabetica();
metodoskip();
metodoLike();
crearIndex();