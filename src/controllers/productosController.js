const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "DB_DWM_FINAL",
  password: "1234",
});

const ProductosTienda = async (req, res) => {
  try {
    let response = await pool.query(
      "select (nomb_pt) as name, (valor_pt) as value, (img_pt) as img from producto_tienda where id_t_fk = " +
        req.body.id_t +
        " ;"
    );
    //console.log(response.rows);
    res.status(201).send({
      data: response.rows,
    });
  } catch (error) {
    res.status(500).send("Error en la consulta");
    console.log(error);
  }
};

module.exports = {
  ProductosTienda,
};
