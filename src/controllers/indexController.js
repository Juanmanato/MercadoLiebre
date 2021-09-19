const productosService = require ("../service/productosService.js")

const indexController = {
    index: function (req, res){
        const filtroDeProductos = productosService.filtroCategoria("visited");
        res.render ("index",{ filtroDeProductos});
    },

};

module.exports = indexController