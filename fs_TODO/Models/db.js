const mongoose = require('mongoose');
const {ServerApiVersion} = require('mongodb');
if (!process.env.MONGO_URI){
  console.error("Mongo_URI is not set in env");
  process.exit(1);
}
//connect MongoDB database to backend server
mongoose.connect(process.env.MONGO_URI, {
    // useNewURLParser :true,
    // useUnifiedTopology:true,
    // useCreateIndex : true,
  serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
  }
})
.then(() => {
  console.log('Our DB is connected');
})
.catch(err => {
  console.error('Error connecting to the database:', err.message);
});