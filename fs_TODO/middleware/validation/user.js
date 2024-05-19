const {check,validationResult} = require('express-validator');//import the check function from express-validator

exports.validateUser = [
    
    check('fullName').trim().not().isEmpty().withMessage('Name is required')
    .isAlpha().withMessage('Enter a valid name').isLength({min :3,max :20}).
    withMessage('Full name must between 3 to 20 characters long'),

    check('email').normalizeEmail().isEmail().
    withMessage('Valid Email is required '),

    check('password').trim().not().isEmpty().withMessage('Password is empty')
    .isLength({min:8,max:20}).
    withMessage('Password must be between 8 to 20 characters long'	),

    check('confirmPassword').trim().not().isEmpty().custom((value,{req})=>{
        if(value !== req.body.password){
            // console.log("Came here");
            // console.log('Password and Confirm Password matched');
            throw new Error('Password and Confirm Password must match');     
        }else{
            // console.log("Came here");
            return true;
        }
    }),
]
exports.validationRes = (req,res,next) =>{
    const result = validationResult(req).array();
    // console.log(result.length);
    // console.log(!result.length);
    // console.log(result);
    //if there is no errors results is 0
    if(!result.length){
        return next();
    }
    const Error = result[0].msg;
    // console.log(Error);
    res.json({success:false,message:Error});//send the error message as a JSON response for front end
};