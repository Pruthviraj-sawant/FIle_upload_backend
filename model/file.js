// const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
// const transporter =require("../config/nodemail");
// const fileSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     fileUrl: {
//         type: String,
//     },
//     tags: {
//         type: String,
//     },
//     email: {
//         type: String,
//     }
// });

require("dotenv").config();

// fileSchema.post("save", async function (doc) {
//     try {
//         console.log("DOC : ", doc)

//         // transporter
//         const transporter = nodemailer.createTransport({
//             host: process.env.MAIL_HOST,
//             auth: {
//                 user: process.env.MAIL_USER,
//                 pass: process.env.MAIL_PASS
//             },
//         })

//         // send mail 
//         const info = await transporter.sendMail({
//             from: 'From Priyansh',
//             to: doc.email,
//             subject: "New File Uploaded to Cloudinary",
//             html: `<h2>File Uploaded</h2> <br> view now - <a href="${doc.fileUrl}">CLick Here</a>`
//         })

//         console.log("Info : ", info)
//     }
//     catch (err) {
//         console.log(err);
//     }
// })

// const File = mongoose.model("File", fileSchema);
// module.exports = File;
const mongoose=require("mongoose");

const fileschema=new mongoose.Schema({

name:{
   type:String,
   required:true
},
imageurl:{
    type:String,
    required:true
},
tags:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
}


});
exports.fileschema = fileschema;



//middleware 

fileschema.post("save",async function (doc) {
    try {

console.log("doc:",doc);


let transporter= nodemailer.createTransport({

    host: process.env.MAIL_HOST,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS
                },
});


let info=await transporter.sendMail({
    from:"pruthviraj sawant",
    to:doc.email,
    subject:"file uploaded to cloudniary",
    html:`<h2>heloo ji <a href=${doc.imageurl}>${doc.imageurl}</a></h2>`

})

console.log(info);

        
    } catch (error) {
        console.log(error);
    }
})







const file=mongoose.model("file",fileschema);
module.exports=file;