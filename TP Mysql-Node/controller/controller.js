const con = require('../db/myConnection')
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
   /* var sql = "INSERT INTO paises(codigoPais, nombrePais,capitalPais,región,población,latitud,longitud) VALUES (?, ?, ?, ?, ?, ?, ?)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    }); */
  });

  
/*
const insertarPais = (req, res) => new Promise((resolve, reject) => {
    const { codigoPais, nombrePais,capitalPais,región,población,latitud,longitud } = req.body;   
    var values = [codigoPais, nombrePais,capitalPais,región,población,latitud,longitud];
    mysqldb.getConnection((err, connection) => {
        if (err) {
            console.error(err);
            res.send(err);
            return;
        }
        else {
            
            let sql = 'INSERT INTO paises(codigoPais, nombrePais,capitalPais,región,población,latitud,longitud) VALUES (?, ?, ?, ?, ?, ?, ?)';
            connection.query(sql, values, (err, results) => {
                if (err) {
                    console.error(err);
                    res.json({ message: "Error al tratar de insertar" });
                }
                else {
                    res.json({ message: "Empleado insertado con exito" });
                }
            });
        }
    });
}); */

exports.insertarPais = insertarPais;