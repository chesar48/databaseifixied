var mysql = require('mysql');

// localhost use
const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'ifixied'
});

//Serveruse
// const conn = mysql.createConnection({
//     host:'localhost',
//     user: 'ifixiedc_ifixied',
//     password:'88ifixied88',
//     database:'ifixiedc_ifixied'
// });


conn.connect((err)=>{
    if(err) throw err;
    console.log ('Mysql terkoneksi');
});

module.exports = conn;