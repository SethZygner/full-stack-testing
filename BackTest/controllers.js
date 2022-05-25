const db = require('./models');
const user = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.PersonID) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const newUser = {
        PersonID: req.body.PersonID,
        Name: req.body.Name
    }

    user.create(newUser)
        .then(data => {
            res.send(data);
        })
        .catch((err)=>{
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        });

}


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {

};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
