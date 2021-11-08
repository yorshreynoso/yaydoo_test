const express   = require('express');
const app       = express();
const cors      = require('cors');
const routes    = require("./routes/routes");
const database  = require("./database");

require('dotenv').config(); // uso del archivo .env

const PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({extended: false})); // user to server
// parse application/json
app.use(express.json()); //server to user


app.use('/api/', routes);
app.use('/', (req, res) => {
    res.status(404).json({message: "La url no existe, please verify that your main url is localhost:3000/api/"});
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});