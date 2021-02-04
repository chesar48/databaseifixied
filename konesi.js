var mysql = require('mysql');

//koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'dbphonestock'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log ('Mysql terkoneksi');
});

module.exports = conn;