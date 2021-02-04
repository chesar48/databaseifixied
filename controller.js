'use strict';

var response = require('./res');
var connection = require('./konesi');

exports.index = function(req,res){
    response.ok("APP Running",res)
};

    //get all phone data
    exports.alliphonedata = function (req,res){
        connection.query('SELECT * FROM iphone', function(error, rows, fields){
            if(error){
                connection.log(error);
            }else {
                response.ok(rows, res)
            }
        });
    };
    //calling data from id
    exports.callingdatafromid = function (req,res){
        let id = req.params.id;
        connection.query('SELECT * FROM iphone WHERE id_product = ?', [id],
            function(error, rows, fields){
                if(error){
                    console.log(error);
                }else {
                    response.ok(rows, res);
                }
            });
    };

    //add iphone data
    exports.addiphonedata = function (req, res) {
        var series = req.body.series;
        var internal =  req.body.internal;
        var price = req.body.price;

        connection.query('INSERT INTO iphone (series,internal,price) VALUES(?,?,?)',
            [series, internal, price],
            function (error, rows, fields){
                if (error){
                    console.log(error);
                }else {
                    response.ok("add data succes!!!",res)
                }
            });
    };

    //edit data from id
    exports.changeiphonedata = function (req,res) {
        var id_product = req.body.id_product;
        var series = req.body.series;
        var internal = req.body.internal;
        var price = req.body.price;

        connection.query('UPDATE iphone SET series=?, internal=?, price=? WHERE id_product=?',
             [series,internal,price, id_product],
            function (error, rows,fields){
                if(error){
                    console.error(error);
                }
                else{
                    response.ok("Edit data success",res)
                }
            });
    };

    //Delete data from id
    exports.deleteiphonedata = function (req,res){
        var id_product = req.body.id_product;
        connection.query('DELETE FROM iphone WHERE id_product=?', [id_product],
            function (error, rows, fields) {
                if (error) {
                    console.log(error);
                } else {
                    response.ok("Data delete succes", res)
                }
            });
    };
