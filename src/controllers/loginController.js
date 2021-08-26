const path = require('path');

const loginController = {
    login: function (req, res) {
        res.sendFile(path.join(__dirname, "../views/login.html"))
       
    },

    register: function (req, res) {
        res.sendFile(path.join(__dirname, "../views/register.html"))
       
    },
}

module.exports = loginController;

