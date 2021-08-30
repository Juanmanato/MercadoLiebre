const express = require('express');
const app = express();

const indexRouters = require("./routers/indexRouters.js")
const loginRouters = require("./routers/loginRouters.js")

app.use(express.static('../public'))

app.set ("view engine", "ejs");

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor levantado')})
   

app.use('/', indexRouters)

app.use("/", loginRouters); 



