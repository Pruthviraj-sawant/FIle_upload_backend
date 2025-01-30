const mongoose=require("mongoose");
require("dotenv").config();

exports.dbconnect=()=>{

    mongoose.connect(process.env.MONGO)
    .then(
        console.log("db is connected")
    )
    .catch((error)=>{
        console.log(error);
        process.exit(1);
    });

};