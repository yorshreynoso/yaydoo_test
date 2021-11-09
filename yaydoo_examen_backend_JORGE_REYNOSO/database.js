const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@petdb.jayxx.mongodb.net/${process.env.DATABASE_PRODUCTION}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    usenewUrlParser: true
})
.then(() => console.log(`Database is connected`))
.catch((error) => console.log(`Error connecting to database`, e));

module.exports = mongoose;