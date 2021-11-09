const express   = require('express');
const router    = express.Router();
const user      = require('../controllers/user');

router.get('/', (req, res) => {
    res.status(200);
    res.end();
});

router.post('/createUser', async(req, res) => {
    const data          = req.body;
    const validateUser  = user.validateUser(data);
    // validamos si los campos estan rellenados
    
    if(validateUser) { 
        const resEmail      = await user.validateEmail(data.email);
        if(resEmail.status) {
            const createUser = await user.createUser(data);
            return res.status(201).json(createUser);

        } else {
            return res.status(400).json(resEmail);
        }
    }
    else {
       return res.status(400).json({message: "Favor de rellenar todos los campos"} );
    } 
});

router.get('/getAllusers', async (req, res) => {
    const allUsers = await user.getAllUsers();
    if(allUsers.status) {
        res.status(200).json(allUsers.data);
    } else {
        res.status(400);
    }
    
});

router.get('/getUserByEmail/:email', async(req, res) => {
    const {email}   = req.params;
    const userEmail = await user.getUserByEmail(email);
    res.status(200).json(userEmail);
    
});

router.put('/edit/:id', async(req, res) => {
    const {id} = req.params;
    const data = req.body;

    const editAns = await user.modify(id, data);

    res.json(editAns);

});

router.delete('/delete:id', async(req, res) => {
    const {id} = req.params;
    const userDelete = await user.delete(id);
    res.status(200).json({status: true, message:"el usuario fue eliminado de manera correcta"});
})

module.exports = router;