const express = require('express');
const app = express();
const path = require('path');

app.listen(precess.env.PORT || 3000, function() {
    console.log('Servidor levantado')})

/*app.listen(3000) 
        console.log('Servidor levantado')*/    

app.use(express.static(path.join(__dirname, '/public')))


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,"/views/index.html"))

})


app.get('/register.html', function (req, res) {
    res.sendFile(path.join(__dirname,"/views/register.html"))
   
})

app.get("/login.html", function (req, res) {
    res.sendFile(path.join(__dirname,"/views/login.html"))
   
})