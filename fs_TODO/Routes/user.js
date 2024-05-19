const express = require('express');
const router =  express.Router();//creates an instance of an Express router
const {createUser} = require('../Controllers/user');//import the createUser function from the user controller
const {validateUser,validationRes} = require('../middleware/validation/user')//import the validateUser function from the user validation middleware
//const {validateRes} = require('../middleware/validation/user')

//Creating and instance and posting it
router.post('/create-user',validateUser,validationRes, createUser);//defines a POST route at /create-user that uses the createUser function from the user controller
module.exports = router; //export the router to make it available for import in other files