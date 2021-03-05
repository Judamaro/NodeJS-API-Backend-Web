const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "DB_DWM_FINAL",
  password: "1234",
});

const JornadaTiendas = async (req, res) => {
  try {
    let response = await pool.query(
      "select dh.nomb_dh, jt.tipo_j, jt.horario from jornada jt inner join dia_horario dh on id_dh = jt.id_dh_fk where id_t_fk = " +
        req.body.id_tienda +
        " ;"
    );
    //console.log(response.rows);

    res.status(200).send({
      data: response.rows,
    });
  } catch (error) {
    res.status(500).send("Error en la consulta ");
    console.log(error);
  }
};

module.exports = {
  JornadaTiendas,
};
