const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/codeial_development");

const db=mongoose.connection

db.on("error",console.error(condole,"error in conncting"))

db.once('open', function(){
    console.log("connected to database");
})
 module.exports=db