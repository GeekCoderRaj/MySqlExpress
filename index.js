const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'stcdatabase'
})

connection.connect(()=>{
    console.log("DB connected");
})

connection.query('SELECT * FROM users', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows)
})

connection.end()