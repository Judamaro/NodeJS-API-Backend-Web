const { Router } = require("express");
const router = Router();

//Funciones
const { LogInCliente } = require("../controllers/loginController");
const {
  ListarEstilistas,
  GroupCategEstilst,
  GetEstilista,
} = require("../controllers/estilistaController");
const { JornadaTiendas } = require("../controllers/jornadaController");
const { ServiciosTienda } = require("../controllers/serviciosController");
const { ProductosTienda } = require("../controllers/productosController");
const { ConsultTienda } = require("../controllers/tiendaController");

//Rutas

//*Login
router.post("/loginCliente", LogInCliente);
//*Estilistas
router.get("/listEstilista", ListarEstilistas);
router.post("/groupEstilist", GroupCategEstilst);
router.post("/getEstilista", GetEstilista);
//*Jornadas de las Tiendas
router.post("/jornadas", JornadaTiendas);
//*Servicios de las Tiendas
router.post("/serviciosTienda", ServiciosTienda);
//*Productos de las Tiendas
router.post("/productosTienda", ProductosTienda);
//*Información de las Tiendas
router.post("/tienda", ConsultTienda);

//Exportar el router
module.exports = router;
