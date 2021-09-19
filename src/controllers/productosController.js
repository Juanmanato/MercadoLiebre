const productosService = require ("../service/productosService.js")

const controller = {
    //mostrar todos los productos en index
   productos: function (req, res){
        const filtroDeProductos = productosService.filtrarProducto();
        res.render ("productos",{ products: filtroDeProductos});
    },

    detalle: function (req, res){
        res.render ("detalle")
    },

    editar: function (req, res){
        res.render ("edicionProducto")
    },

    modificar: function (req, res){
        res.render ("index")
    },

    eliminar: function(req, res){
        res.redirect ("/index")
    },

    crear: function (req, res) {
        res.render ("crearProducto")
        
    },

    almacenar: function (req, res) {
        res.redirect("/index")
        
    }
}


//siempre exportar 

module.exports = controller