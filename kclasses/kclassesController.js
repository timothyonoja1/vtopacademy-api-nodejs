
const db = require("../dbconfiguration/sequelizeConfig");
const Kclass = db.kclasses;

// Returns kclasses for a given schoolID
exports.getKclassesBySchoolId = async (req, res) => {
    const schoolId = req.params.id; 
    const kclasses = await Kclass.findAll({
        where: {
            schoolId: schoolId
        }
    });
    res.status(200).send(kclasses);
};

// Returns kclass for a given id
exports.getKclassById = async (req, res) => {
    const id = req.params.id;
    const kclass = await Kclass.findByPk(id)
    if (kclass != null) {
        res.status(200).send(kclass); 
    } else {
        res.status(404).send({
            message: `Cannot find kclass with id=${id}.`
        }); 
    }
};

// Creates and saves new kclass
exports.createKclass = async (req, res) => {
    // Validate request
    if (!req.body.name && !req.body.number) {
        res.status(400).send({
            message: "Enter valid school!"
        });
        return;
    }
    const kclass = await Kclass.create({
        name: kclass.name,
        number: kclass.number,
        schoolId: schoolId,
    })
    if (kclass != null) {
        res.status(201).send(kclass); 
    } else {
        res.status(500).send({
            message: err.message 
                || "Some error occurred while creating kclass."
        });
    }
};

// Updates the given kclass
exports.updateKclass = async (req, res) => {
    const id = req.params.id;
    const kclass = await Kclass.findByPk(id);
    if (kclass == null || (!req.body.name && !req.body.number)) {
        res.status(404).send({
            message: `Enter valid id and body parameters`
        }); 
    } 
    kclass.set({ 
        name: req.body.name,
        number: req.body.number
    });
    await kclass.save(); 
    res.status(201).send({
        message: "Kclass was updated successfully."
    });
};

// Deletes kclass with the given id
exports.deleteKclass = async (req, res) => {
    const id = req.params.id;
    const kclass = await Kclass.findByPk(id);
    if (kclass == null) {
        res.status(404).send({
            message: `Cannot find Kclass with id=${id}.`
        }); 
    } 
    await kclass.destroy();
    res.status(204).send({
        message: "Kclass was deleted successfully!"
    });
};