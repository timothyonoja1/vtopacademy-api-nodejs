
module.exports = (sequelize, DataTypes) => {
    const Kclass = sequelize.define("kclass", {
      name: {
        type: DataTypes.STRING
      },
      number: {
        type: DataTypes.INTEGER
      }
    });
  
    return Kclass;
};