
module.exports = (sequelize, DataTypes) => {
    const School = sequelize.define("school", {
      name: {
        type: DataTypes.STRING
      },
      number: {
        type: DataTypes.INTEGER
      }
    });
  
    return School; 
};