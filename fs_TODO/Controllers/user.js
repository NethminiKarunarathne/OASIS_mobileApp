const User = require('../Models/user');
exports.createUser = async(req,res)=>{ //req coming form the frontend defines a POST route at /create-user
    // // User.findOne({email : give an email to check}) //if there is emails that means the email is in use 
    const {fullName,email,password,confirmPassword} =req.body
    try {
      const isEmailUsed= await User.isThisEmailInUse(email);
      console.log("came 1"+ isEmailUsed);
      if(!isEmailUsed) { //isEmailInUse returns false if there is any object exist already in db
        console.log("came");
        return res.json({
          
          success: false,
          message: "This email already used, Try signing in"
        });
    }
      const user = new User({
      fullName,
      email,
      password,
      confirmPassword
    //   password : await bcrypt.hash(password,10),
    });//create a new user with hardcoded values
    //used to properly save the user to the database.
    await user.save();
    res.json({success :true , user});   
    //sends the created user back as a JSON response
    }catch(error){
      res.json({success:false, message: error.message});
    }
}