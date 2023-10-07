const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3001;

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

const db = mysql.createConnection({
  host: 'mysql',
  user: 'admin',
  password: '1234',
  database: 'vueDockerDatabase'
});

db.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Подключение к базе данных успешно установлено');
  }
});


app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM content';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Ошибка выполнения SQL-запроса:', err);
      res.status(500).json({ error: 'Ошибка выполнения запроса' });
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
