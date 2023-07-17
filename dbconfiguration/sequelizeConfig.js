
const dbConfig = require("./postgreDbConfig.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
      }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../accounts/models/user.js")(sequelize, Sequelize);
db.role = require("../accounts/models/role.js")(sequelize, Sequelize); 
db.schools = require("../schools/school.js")(sequelize, Sequelize);
db.kclasses = require("../kclasses/kclass.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles"
});
db.user.belongsToMany(db.role, {
  through: "user_roles"
});
db.ROLES = ["user", "admin", "moderator"];

db.schools.hasMany(db.kclasses, { as: "kclasses" }); 
db.kclasses.belongsTo(db.schools, {
  foreignKey: "schoolId",
  as: "school",
});
 
module.exports = db;