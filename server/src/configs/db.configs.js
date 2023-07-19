const dev = {
  db: {
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'ProjectShoes',
    dialect: 'mysql',
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
module.exports = dev;
