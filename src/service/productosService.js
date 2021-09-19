const fs = require("fs")

const path = require("path")

const productsFilePath = path.join(__dirname, "../data/ProductsData.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));


const productosService = {
filtrarProducto(){
    const filtroDeProductos = products.filter(function(produc){
        return (produc)
    });
    return filtroDeProductos;
},
filtroCategoria(category) {
    return productosService.filtrarProducto().filter(function(produc) {
        return produc.category == category;
    });
},





}
module.exports = productosService