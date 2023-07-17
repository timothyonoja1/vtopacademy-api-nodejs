
const db = require("../dbconfiguration/sequelizeConfig");
const School = db.schools;

// Returns all schools
exports.getAllSchools = async (req, res) => { 
    const schools = await School.findAll();
    res.status(200).send(schools);
};

// Returns school for a given id
exports.getSchoolById = async (req, res) => { 
    const id = req.params.id;
    const school = await School.findByPk(id);
    if (school != null) {
        res.status(200).send(school); 
    } else {
        res.status(404).send({
            message: `Cannot find School with id=${id}.`
        }); 
    }
};

// Creates and saves new school
exports.createSchool = async (req, res) => {
    // Validate request
    if (!req.body.name && !req.body.number) {
        res.status(400).send({
            message: "Enter valid school!"
        });
    }
    const school = await School.create({
        name: req.body.name,
        number: req.body.number,
    });
    if (school != null) {
        res.status(201).send(school);
    } else {
        res.status(500).send({
            message: err.message 
                || "Some error occurred while creating school."
        });
    }
};

// Updates the given school
exports.updateSchool = async (req, res) => {
    const id = req.params.id;
    const school = await School.findByPk(id);
    if (school == null || (!req.body.name && !req.body.number)) {
        res.status(404).send({
            message: `Enter valid id and body parameters`
        }); 
    } 
    school.set({
        name: req.body.name,
        number: req.body.number
    });
    await school.save();
    res.status(201).send({
        message: "School was updated successfully."
    });
};

// Deletes school with the given id
exports.deleteSchool = async (req, res) => {
    const id = req.params.id;
    const school = await School.findByPk(id);
    if (school == null) {
        res.status(404).send({
            message: `Cannot find School with id=${id}.`
        }); 
    } 
    await school.destroy();
    res.status(204).send({
        message: "School was deleted successfully!"
    });
};
