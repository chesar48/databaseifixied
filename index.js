const express = require('express');
const bodyParser = require ('body-parser');
const app = express();

var cors = require('cors');

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//call routes
var routes = require('./routes');
routes(app);

app.listen(3001, () => {
    console.log("Koneksi Sukses");
});