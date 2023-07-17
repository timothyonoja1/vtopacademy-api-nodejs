
const { verifySignUp } = require("../middleware");
const accountsController = require("./accountsController");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });  

    app.post(
        "/api/accounts/register", 
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            //verifySignUp.checkRolesExisted
        ], 
        accountsController.register
    );

    app.post("/api/accounts/login", accountsController.login);
};