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
    //get phone data for landingpage carousel
    exports.landingphone = function (req,res){
        connection.query('SELECT * FROM iphone WHERE id_iphone > 9',
            function(error, rows, fields){
                if(error){
                    console.log(error);
                }else {
                    response.ok(rows, res);
                }
            });
    };
    //call blob data
    exports.blobimage = function (req,res){
        connection.query('SELECT gambar FROM iphone WHERE id_iphone >9',
            function(error, rows, fields){
                if(error){
                    console.log(error);
                }else {
                    response.ok(rows, res);
                }
            });
    };
    //calling data from id
    exports.callingdatafromid = function (req,res){
        let id = req.params.id;
        connection.query('SELECT * FROM productip WHERE id_iphone = ?', [id],
            function(error, rows, fields){[]
                if(error){
                    console.log(error);
                }else {
                    response.ok(rows, res);
                }
            });
    };
   //dataservice
    exports.callingdataservice = function (req,res){
        let user_no = req.params.user_no;
        connection.query('SELECT * FROM service WHERE user_no = ? ORDER BY tgl_out desc', [user_no],
            function(error, rows, fields){[]
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

    //tampilkan cart group
    exports.cartGroup = function(req, res){
        connection.query('SELECT user_web.id_user,user_web.user_name,productip.tipe FROM cart JOIN productip JOIN user_web WHERE cart.id_product = productip.id_product AND cart.id_user = user_web.id_user ORDER BY user_web.id_user',
        function (error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.oknested(rows, res);
            }
        })
    } 

    exports.tampilgroupmatakuliah = function(req, res){
        connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa',
            function (error, rows, fields){
                if(error){
                    console.log(error);
                }else {
                    response.oknested(rows, res);
                }
            }
        )
    
    }
