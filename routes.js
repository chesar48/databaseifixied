'use strict';

const { response } = require('express');

module.exports = function(app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/getiphone')
        .get(jsonku.alliphonedata);

    app.route('/getiphone/:id')
        .get(jsonku.callingdatafromid);

    app.route('/add')
        .post(jsonku.addiphonedata);
        
    app.route('/edit')
        .put(jsonku.changeiphonedata);
    app.route('/delete')
        .delete(jsonku.deleteiphonedata);
};   
