const express = require("express");
const {createUser,allocateUserToCompanies,listUsers} = require('../controllers/userController')
const router = express.Router();


router.post('/allocate',allocateUserToCompanies)
router.get('/',listUsers)
router.post('/',createUser);
module.exports = router;
