const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  database: "DB_DWM_FINAL",
  password: "1234",
});

const ListarEstilistas = async (req, res) => {
  try {
    const response = await pool.query(
      "SELECT id_et, nomb_et, titulo_et, info_et, puntaje_et, id_t_fk, img_et FROM estilista_Tienda"
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

const GroupCategEstilst = async (req, res) => {
  try {
    let response = await pool.query(
      "select ct.nomb_ct, e.nomb_et, e.titulo_et, e.puntaje_et, e.id_t_fk, e.img_et  from estilista_tienda e inner join tienda td on td.id_t = e.id_t_fk inner join categoria_tienda ct on ct.id_ct = td.id_ct_fk where td.id_ct_fk = " +
        req.body.id_categ +
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

const GetEstilista = async (req, res) => {
  try {
    let response = await pool.query(
      "select id_et, nomb_et, titulo_et, info_et, puntaje_et, id_t_fk, img_et from estilista_Tienda where id_et = " +
        req.body.idS +
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
  ListarEstilistas,
  GroupCategEstilst,
  GetEstilista,
};
