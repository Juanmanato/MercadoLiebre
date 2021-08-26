const path = require('path');

const indexController = {
    index: function (req , res){
        res.sendFile(path.join( __dirname, "../views/index.html"))
    },
};

module.exports = indexController;