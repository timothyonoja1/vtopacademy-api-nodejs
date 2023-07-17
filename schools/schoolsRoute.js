
const { verifySignUp } = require("../middleware");
const schoolsController = require("./schoolsController");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    }); 

    app.get("/api/schools", schoolsController.getAllSchools);
    app.get("/api/schools/:id", schoolsController.getSchoolById);
    app.post("/api/schools", schoolsController.createSchool);
    app.put("/api/schools/:id", schoolsController.updateSchool);
    app.delete("/api/schools/:id", schoolsController.deleteSchool);
    
};