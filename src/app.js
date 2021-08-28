const express = require('express');

const path = require('path');

const indexRouters = require("./routers/indexRouters")
const loginRouters = require("./routers/loginRouters")

const app = express();

app.set ("view engine", "ejs");

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor levantado')})
   

app.use(express.static(path.join(__dirname, '../public')))



app.use('/', indexRouters)

app.use("/login", loginRouters) 

app.use("/register", loginRouters) 


