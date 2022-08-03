const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'FlyingH@m1',
  database: 'employees'
});

db.connect();

module.exports = db;
