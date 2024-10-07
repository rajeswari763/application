const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5000;

const db = mysql.createConnection({
  host: 'db',  // Docker service name
  user: 'root',
  password: 'Rajeswari@1998',
  database: 'app_db'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend API is listening on port ${port}`);
});
