const { Pool } = require("pg");

var validatorSesion;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "DB_DWM_FINAL",
  password: "1234",
});

const LogInCliente = async (req, res) => {
  try {
    console.log(req.body.emailc + " / " + req.body.contrac);
    //Consultar sesión activa
    let response = await pool.query(
      "SELECT * FROM cliente WHERE email_c=" +
        "'" +
        req.body.emailc +
        "'" +
        "AND contra_c=" +
        "'" +
        req.body.contrac +
        "' ;"
    );

    //Si existe key en el obj es porque existe registro del cliente
    function isValid(obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          return true;
        }
        return false;
      }
    }

    //Con la funcion anterior, si es true = existe registro del cliente, si retorna false no existe registro del cliente
    if (isValid(response.rows[0])) {
      validatorSesion = true;
    } else {
      validatorSesion = false;
    }

    //Si hay registo del cliente, se condece acceso a la aplicacion
    if (validatorSesion) {
      res.status(200).send({
        sesion: "loged",
        message: "Bienvenido",
      });
    } else {
      res.status(403).send({
        sesion: "Error",
        message: "Error, no existe registro o ya está logeado",
      });
    }
  } catch (error) {
    res.status(500).send("Error al logear");
    console.log(error);
  }
};

module.exports = {
  LogInCliente,
};
