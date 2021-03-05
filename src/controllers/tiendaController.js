const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "DB_DWM_FINAL",
  password: "1234",
});

const ConsultTienda = async (req, res) => {
  try {
    console.log(req.body);
    let response = await pool.query(
      "select id_t, nomb_t, dir_t, img_t from tienda where id_t = " +
        req.body.id_t +
        " ;"
    );

    //console.log(response.rows);
    res.status(200).send({
      data: response.rows,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en la consulta");
  }
};

module.exports = {
  ConsultTienda,
};
