const assert = require('assert');
const DogInfo = require('../models/doginfo');

describe('Saving records', function(){

    it('Saves a record to the database', function(done){
        var info = new DogInfo({
            name: 'Hodu'
        });

        info.save().then(function(){
            assert(info.isNew === false);
            done();
        });

    });

});