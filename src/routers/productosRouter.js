//requires
const express = require("express")

const router = express.Router()

const multer = require("multer")

const path = require ("path")


//ejecucion de multer para subir archivos y nombrarlos

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/img"),
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

//controllers

const productosController =  require("../controllers/productosController")


//rutas
//productos
router.get("/", productosController.productos)

//detalle un producto
router.get("/detalle", productosController.detalle)

//formulario para modificar producto boton editar prodcuto en la pagina detalle y telleva a edicionProducto
router.get ("/editar", productosController.editar)

//para de modificar el producto boton guardar
router.put ("/:id", productosController.modificar)

//elimina el producto cuando estas en la pagina del detalle de 1 producto
router.delete("/:id", productosController.eliminar)

//crear un producto
router.get("/crear", productosController.crear)

//para guardar el producto creado con el boton guardar
router.post("/", productosController.almacenar)






// siempre hay que exportar tiene que ser igual que la const de express.Router()

module.exports = router