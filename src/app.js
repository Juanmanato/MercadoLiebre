// requerir dependencias

const express = require('express');
const path = require("path")
const methodOverride = require ("method-override")
//para usar express
const app = express();

//middlewares
app.use(express.static(path.join(__dirname,'../public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

//requerir los routers
const indexRouters = require("./routers/indexRouters.js")
const loginRouters = require("./routers/loginRouters.js")
const productosRouter = require ("./routers/productosRouter.js")



//template engine
app.set ("view engine", "ejs");
app.set ("views", path.join(__dirname, "/views"))



app.listen(process.env.PORT || 3005, () => {
    console.log('Servidor levantado')})
   

app.use('/', indexRouters);

app.use("/", loginRouters); 

app.use("/Productos", productosRouter);

