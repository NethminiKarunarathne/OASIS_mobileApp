const express = require('express');
require('dotenv').config();
require('./Models/db');
const userRouter = require('./Routes/user');

const User = require('./Models/user') //import the User model from the Models folder
const app = express(); //creates an instance of an Express application

// app.use((req,res,next)=>{   //creatin middleware
//   req.on('data',chunk =>{  //listen for incoming data
//     const data = JSON.parse(chunk);
//     // console.log(JSON.parse(chunk));//parse the incoming data as JSON
//     req.body = data;//set the body property of the request object to the parsed JSON data
//     next();
//   });
  
// }); 

app.use(express.json()); //middleware to parse incoming JSON data
app.use(userRouter);//use the userRouter for all routes starting with /user

app.get('/test',(req, res)=>{  //defines a GET route at /test
  
  res.send("Request sent succesfully");
});






//to route
app.get('/',(req,res)=>{res.send('<H1 style = "color :green;">Hello world..</H1>')}) //'/' is use to get to the home router defines a GET route 

app.listen(8000,()=>{console.log("Port is listening..."); // starts the server on port 8000 and logs a message to the console when the server is running.
});
