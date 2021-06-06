const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/movies-library',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function () {
    console.log('***** DB is READY! *****');
});