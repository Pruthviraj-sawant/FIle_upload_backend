// // const File = require("../models/File");
// // const cloudinary = require("cloudinary").v2;

// // //localfileupload -> handler function

// // exports.localFileUpload = async (req, res) => {
// //     try {

// //         //fetch filefrom request
// //         const file = req.files.file;
// //         console.log("FILE AAGYI JEE -> ", file);


// //         //create path where file need to be stored on server
// //         let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
// //         console.log("PATH-> ", path)

// //         //add path to the move fucntion
// //         file.mv(path, (err) => {
// //             console.log(err);
// //         });

// //         //create a successful response
// //         res.json({
// //             success: true,
// //             message: 'Local File Uploaded Successfully',
// //         });

// //     }
// //     catch (error) {
// //         console.log("Not able to upload the file on server")
// //         console.log(error);
// //     }
// // }

// // function isFileTypeSupported(fileType, supportedTypes) {
// //     return supportedTypes.includes(fileType);
// // }

// // async function uploadFileToCloudinary(file, folder, quality) {
// //     const options = { folder };
// //     if (quality) {
// //         options.quality = quality;
// //     }
// //     options.resource_type = "auto"
// //     return await cloudinary.uploader.upload(file.tempFilePath, options);
// // }

// // // image Uploader Handler 
// // exports.imageUpload = async (req, res) => {
// //     try {

// //         const { name, tags, email } = req.body;
// //         console.log(name, tags, email);

// //         // Fetch file 
// //         const imageFile = req.files.imageFile;
// //         console.log(imageFile);

// //         const supportedTypes = ["png", "jpg", "jpeg"];
// //         const fileType = imageFile.name.split('.')[1].toLowerCase();

// //         // Check file type is supported or not 
// //         if (!isFileTypeSupported(fileType, supportedTypes)) {
// //             return res.status(400).json({
// //                 success: false,
// //                 message: "File type not supported"
// //             })
// //         }

// //         // Upload to Cloudinary
// //         const response = await uploadFileToCloudinary(imageFile, "FileApp");
// //         console.log(response)


// //         // Upload to DB 
// //         const fileData = await File.create({
// //             name,
// //             tags,
// //             email,
// //             fileUrl: response.secure_url
// //         })


// //         res.status(200).json({
// //             success: true,
// //             message: "File uploaded successfully",
// //             file: fileData
// //         })

// //     }
// //     catch (error) {
// //         console.log(error)
// //         res.status(400).json({
// //             success: false,
// //             message: "Something went wrong"
// //         })
// //     }
// // }

// // // Video Uploader Handler 
// // exports.videoUpload = async (req, res) => {
// //     try {
// //         // Fetch Data 
// //         const { name, tags, email } = req.body;
// //         console.log(name, tags, email);

// //         const videoFile = req.files.videoFile;

// //         // Validation 
// //         const supportedTypes = ["mp4", "mov"];
// //         const fileType = videoFile.name.split(".")[1].toLowerCase();

// //         // HW - File Maximum 5MB
// //         if (!isFileTypeSupported(fileType, supportedTypes)) {
// //             res.status(400).json({
// //                 success: false,
// //                 message: "File type not supported"
// //             })
// //         }

// //         // Supported 
// //         // File Upload to the Cloudinary 
// //         const response = await uploadFileToCloudinary(videoFile, "FileApp");

// //         // Upload To DB
// //         const vidFile = new File({
// //             name,
// //             tags,
// //             email,
// //             fileUrl: response.secure_url
// //         })

// //         const file = await vidFile.save();

// //         res.status(200).json({
// //             success: true,
// //             message: "video file uploaded successfully",
// //             file: file
// //         })
// //     }
// //     catch (err) {
// //         console.error(err)
// //         res.status(400).json({
// //             success: false,
// //             message: "Something went wrong"
// //         })
// //     }
// // }

// // // image Reducer Handler 
// // exports.imageReducer = async (req, res) => {
// //     try {

// //         const { name, tags, email } = req.body;
// //         console.log(name, tags, email);

// //         // Fetch file 
// //         const imageFile = req.files.imageFile;
// //         console.log(imageFile);

// //         const supportedTypes = ["png", "jpg", "jpeg"];
// //         const fileType = imageFile.name.split('.')[1].toLowerCase();

// //         // Check file type is supported or not 
// //         if (!isFileTypeSupported(fileType, supportedTypes)) {
// //             return res.status(400).json({
// //                 success: false,
// //                 message: "File type not supported"
// //             })
// //         }

// //         // Upload to Cloudinary
// //         // HW - Decrease size by height and width 
// //         const response = await uploadFileToCloudinary(imageFile, "FileApp", 50);
// //         console.log(response)


// //         // Upload to DB 
// //         const fileData = await File.create({
// //             name,
// //             tags,
// //             email,
// //             fileUrl: response.secure_url
// //         })


// //         res.status(200).json({
// //             success: true,
// //             message: "File uploaded successfully",
// //             file: fileData
// //         })

// //     }
// //     catch (error) {
// //         console.log(error)
// //         res.status(400).json({
// //             success: false,
// //             message: "Something went wrong"
// //         })
// //     }
// // }


// const cloudinary = require("cloudinary").v2;

// const fileupload = async (req, res) => {
//   try {
//     const file = req.files.file;
//     console.log("FILE RECEIVED -> ", file);

//     let path = __dirname + "/files/" + Date.now()+`.${file.name.split('.')[1]}`;
//     console.log("path ->",path)
//     file.mv(path, (err) => {
      
//         console.log("Error moving file:", err);
      
//     });

//     res.json({
//       success: true,
//       message: "File uploaded successfully",
//     });
//   } catch (error) {
//     console.log("Error uploading file to server:", error);
   
//   }
// };

// module.exports = fileupload;


// function issupported(type,supportedtype){
//  return supportedtype.includes(type);
// }

// async function cloudinaryupload(file,folder){
//   const option={folder};
//  return await file.cloudinary.uploader.upload(file.tempFilePath,option);
// } 
// const imageupload= async (req,res) => {
// try{
//    const {tag,name,email}=req.body;

//    console.log(tag,name,email);

//    const file=req.files.imageup;
//    console.log(file);

//    const supportedtype=["jpg","png","jpeg"];
//    const type=file.split('.')[1].toLowerCase();

//    if(!issupported(type,supportedtype)){
//     return res.status(200).json({
//       success:false,
//       message:'file formate not supported'
//     });
//    }

// const response=await cloudinaryupload(file,"filehandling")
//   res.status(200).json({
//     success:true,
//     message:"image uploaded successfilly"
//   });
// }
// catch(err){
// console.log(err);
// res.status(500).json({
//   success:false,
//   message:"something went wrong"
// });
// }
// }
// module.exports=imageupload;
const cloudinary = require("cloudinary").v2;
const File = require("../model/File");

// Local File Upload
const fileupload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log("FILE RECEIVED -> ", file);

    let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
    console.log("path ->", path);

    file.mv(path, (err) => {
      if (err) {
        console.log("Error moving file:", err);
        return res.status(500).json({ success: false, message: "File move failed" });
      }
    });

    res.json({
      success: true,
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.log("Error uploading file to server:", error);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

// Check if file type is supported
function isSupported(type, supportedTypes) {
  return supportedTypes.includes(type);
}

// Upload file to Cloudinary
async function cloudinaryUpload(file, folder,quality) {
  const options = { folder };

  if(quality){
    options.quality=quality;
  }
  options.resource_type="auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// Image Upload
const imageupload = async (req, res) => {
  try {
    const { tags, name, email } = req.body;
    console.log(tags, name, email);

    const file = req.files.imageup;
    console.log(file);

    const supportedTypes = ["jpg", "png", "jpeg"];
    const type = file.name.split('.')[1].toLowerCase();

    if (!isSupported(type, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }
console.log("upload to file folder");
const response = await cloudinaryUpload(file, "filehandling");
console.log(response);

const filedata=await File.create({
    name,
    tags,
    email,
    imageurl:response.secure_url,
});

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      secure_yrl:response.secure_url
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
//for video......................................................................
// async function cloudinaryvideoUpload(file, folder) {
//   try {
//     const options = { 
//       folder, 
//       resource_type: "video" // Ensures Cloudinary treats it as a video
//     };
//     return await cloudinary.uploader.upload(file.tempFilePath, options);
//   } catch (error) {
//     console.error("Cloudinary Upload Error:", error);
//     throw new Error("File upload failed");
//   }
// }

const videoupload=async(req,res)=>{
  try {
    
       //data fetch
       const {name,email,tags}=req.body;
       console.log(name,email,tags);

       //req.files is path to get file
       const file=req.files.videoup;
       console.log(file);

       //validation
       const supportedfiletype=["mp4","mov", "avi", "mkv"];
       const filetype=file.name.split(".")[1].toLowerCase();
        if(!isSupported(filetype,supportedfiletype) && (file.size > 100 * 1024 * 1024)){
          res.status(400).json({
              success:false,
              message:"file not supported"
          });
        }
        //upload to cloudinary
        console.log("upload to file folder");
        const response = await cloudinaryUpload(file, "filehandling");
        console.log(response);
//entry in db
// FIle is model name
        const filedata=  await File.create({
            name,
            tags,
            email,
            imageurl:response.secure_url
          });

          res.status(200).json({
            success: true,
            message: "video uploaded successfully",
            secure_yrl:response.secure_url
          });


  } catch (error) {
    console.log(error);
    res.status(400).json({
      success:false,
      message:"something went Wrong",

    });
  }
}

const imagreducedeupload = async (req, res) => {
  try {
    const { tags, name, email } = req.body;
    console.log(tags, name, email);

    const file = req.files.imageup;
    console.log(file);

    const supportedTypes = ["jpg", "png", "jpeg"];
    const type = file.name.split('.')[1].toLowerCase();

    if (!isSupported(type, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }
console.log("upload to file folder");
const response = await cloudinaryUpload(file, "filehandling",30);
console.log(response);

const filedata=await File.create({
    name,
    tags,
    email,
    imageurl:response.secure_url,
});

    res.status(200).json({
      success: true,
      message: "Image uploaded successfully",
      secure_yrl:response.secure_url
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

// Export both functions correctly
module.exports = { fileupload, imageupload , videoupload,imagreducedeupload};
