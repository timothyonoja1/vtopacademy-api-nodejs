
module.exports = {
  HOST: "vtopacademy-postgre-instance.c2krklyg57o0.us-east-2.rds.amazonaws.com",
  USER: "vtopacademy",
  PASSWORD: "vtopacademy123",
  DB: "vtopacademyPostgreDB",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}; 