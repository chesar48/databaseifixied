var mysql = require('mysql');

//koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'ifixied'
});
// const conn = mysql.createConnection({
//     host:'localhost',
//     user: 'ifixiedc_ifixied',
//     password:'88ifixied88',
//     database:'ifixiedc_ifixied'
// });

// const conn = mysql.createConnection({
//     host:'203.190.44.99',
//     user: 'ifixiedc_ifixied',
//     password:'88ifixied88',
//     database:'ifixiedc_ifixied'
// });


conn.connect((err)=>{
    if(err) throw err;
    console.log ('Mysql terkoneksi');
});

module.exports = conn;