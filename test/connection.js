const mongoose = require('mongoose');

//connect to mongdb
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

//connect to the db before test runs
before(function(done){
    //connect to mongodb
    mongoose.connection.once('open', function(){
        console.log('MongoDB Connected...');
        done();
    }).on('error', function(error){
        console.log('Connection error:', error);
    });

});

