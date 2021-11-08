const express = require('express');
const router = express.Router();
const user  = require('../controllers/user');

router.get('/', (req, res) => {
    res.status(200);
    res.end();
});

router.post('/createUser', async(req, res) => {
    const data = req.body;
    const validateUser  = user.validateUser(data);
    console.log(validateUser);
    
    if(validateUser) { 
        const resEmail      = await user.validateEmail(data.email);
        if(resEmail.status) {
           const createUser    = await user.createUser(data);
          //todo
          //responder status ok de usuario creado
       } else {
           res.json(resEmail);
       }
    }
    else {
       return res.status(400).json({message: "Favor de rellenar todos los campos"} );
    }

});

router.put('/edit', (req, res) => {

});

router.delete('/delete:id', (req, res) => {

})

module.exports = router;