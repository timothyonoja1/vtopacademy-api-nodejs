
const { verifySignUp } = require("../middleware");
const kclassesController = require("./kclassesController");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    }); 

    app.get("/api/kclasses/by-schoolID/:id", kclassesController.getKclassesBySchoolId);
    app.post("/api/kclasses/:id", kclassesController.getKclassById);
    app.put("/api/kclasses/:id", kclassesController.updateKclass);
    app.delete("/api/kclasses/:id", kclassesController.deleteKclass);
    
};