const mongoose = require("mongoose");

//define mongodb connection URL
const mongoURL =  'mongodb://0.0.0.0:27017/hotels';

//set up mongodb connection
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to mongodb server");
});

db.on('error',(err)=>{
      console.log(err);
});
db.on('disconnected',(err)=>{
      console.log('Mongodb server disconnected')
})

module.exports = db;
