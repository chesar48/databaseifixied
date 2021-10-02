const express = require('express');
const bodyParser = require ('body-parser');
const app = express();

var morgan = require('morgan');
var cors = require('cors');

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

//call routes
var routes = require('./routes');
routes(app);
//routes menu from index
app.use('/auth', require('./middleware'));

//dont forget to use this for cpanel use
// app.listen(() => {
//     console.log("Koneksi Sukses");
// });

//only use when on local host
app.listen(3006,() => {
    console.log("Koneksi Sukses");
});