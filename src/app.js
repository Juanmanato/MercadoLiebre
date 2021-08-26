const express = require('express');

const path = require('path');

const indexRouters = require("./routers/indexRouters")
const loginRouters = require("./routers/loginRouters")

const app = express();


app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor levantado')})
   

app.use(express.static(path.join(__dirname, '../public')))



app.get('/', indexRouters)

app.get("/login", loginRouters) 

app.get("/register", loginRouters) 


