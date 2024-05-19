const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//blue print


const userSchema = new mongoose.Schema({
    fullName :{
        type : String,
        required : true
    },
    email:{
        type : String,
        required: true,
        unique :true
    },
    password :{
        type :String,
        required: true
    },
    profilePic :Buffer,
})

userSchema.statics.isThisEmailInUse = async function(email){
    // console.log('show email'+email);
    if(!email ) throw new error("Invalid Email");
    try{
        const found = await this.findOne({email:email});
        // console.log('show found'+found);
        if(found) return false;//if found has any object that means the email is in use
        
        return true;
    }
    catch(error){
        console.log('Errror in the isThisEmailInUse Method',error);
        return false ;
    }
    
}

const User =   mongoose.model('User',userSchema); //make it available for import in other files
module.exports = User;
