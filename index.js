// // const express=require("express");
// // const app=express();

// // require("dotenv").config;

// // const port = process.env.PORT || 4000;

// // //middleware
// // app.use(express.json());
// // const fileupload=require("express-fileupload");
// // app.use(fileupload());

// // //db connect
// // const db =require("./config/databse");
// // db.dbconnect();
// // //cloud connect
// // const cloud=require("./config/cloudnary");
// // cloud.cloudconnect();
// // //route
// // const upload=require("./routes/file");
// // app.use('api/v1/upload',upload);
// // //app connect
// // app.use(port,()=>{
// //     console.log(`app is running at port ${port}`);
// // })
// //app create
// const express = require("express");
// const app = express();

// //PORt find krna h 
// require("dotenv").config();
// const PORT = process.env.PORT || 3000;

// //middleware add krne h 
// app.use(express.json());
// const fileUpload = require("express-fileupload");
// app.use(fileUpload({
//     useTempFiles : true,
//     tempFileDir : '/tmp/'
// }));
// //db se connect krnah 
// const db = require("./config/databse");
// db.dbconnect();

// //cloud se connect krna h 
// const cloudinary = require("./config/cloudnary");
// cloudinary.cloudconnect();

// //api route mount krna h 
// const Upload = require("./routes/file");
// app.use('/api/v1/upload', Upload);

// //activate server
// app.listen(PORT, () => {
//     console.log(`App is running at ${PORT}`);
// })
//app create
const express = require("express");
const app = express();

//PORt find krna h 
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware add krne h 
app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
//db se connect krnah 
const db = require("./config/database");
db.dbconnect();

//cloud se connect krna h 
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

//api route mount krna h 
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);

//activate server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})