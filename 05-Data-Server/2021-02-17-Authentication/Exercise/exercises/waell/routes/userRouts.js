const router = require('express').Router()
const {addUser, getUser, logoutUser} = require("../controllers/userControls")
const { checkEmail } = require('../middleware/validator');
// Registration
router.post('/register', checkEmail, addUser);

// login
router.post('/login', getUser);

router.get('/logout', logoutUser);



module.exports = router;