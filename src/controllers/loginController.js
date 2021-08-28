const loginController = {
    login: function (req, res) {
        res.render("login.ejs")
       
    },

    register: function (req, res) {
        res.render("register.ejs")
       
    },
}

module.exports = loginController;

