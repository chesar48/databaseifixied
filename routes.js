'use strict';

const { response } = require('express');

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);
    app.route('/getiphone')
        .get(jsonku.alliphonedata);
    app.route('/getimage')
        .get(jsonku.blobimage);
    app.route('/landingphone')
        .get(jsonku.landingphone);
    app.route('/getiphone/:id')
        .get(jsonku.callingdatafromid);
    app.route('/dataservice/:user_no')
        .get(jsonku.callingdataservice);
        app.route('/allParts')
        .get(jsonku.allParts);
    app.route('/allmcParts')
        .get(jsonku.allmcParts);
    app.route('/allAcc')
        .get(jsonku.allAcc);
    app.route('/allmcAcc')
        .get(jsonku.allmcAcc);
        app.route('/categoryPart/:kategori')
        .get(jsonku.categoryPart);
    app.route('/add')
        .post(jsonku.addiphonedata);
    app.route('/edit')
        .put(jsonku.changeiphonedata);
    app.route('/delete')
        .delete(jsonku.deleteiphonedata);
    //route cart
    app.route('/cartGroup')
        .get(jsonku.cartGroup);
};   
