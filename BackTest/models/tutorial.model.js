module.exports = (sequelize, Sequelize) => {
    return sequelize.define("test", {
        PersonID: {
            type: Sequelize.INT
        },
        Name: {
            type: Sequelize.STRING
        }
    });
};
