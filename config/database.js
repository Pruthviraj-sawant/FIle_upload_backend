// const mongoose = require("mongoose");

// require("dotenv").config();

// exports.connect = () => {
//     mongoose.connect(process.env.MONGODB_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(console.log("DB Connection Successful"))
//     .catch(  (error) => {
//         console.log("DB Connection Issues");
//         console.error(error);
//         process.exit(1);
//     } );
// };
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