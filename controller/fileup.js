const cloudinary = require("cloudinary").v2;

const fileupload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log("FILE RECEIVED -> ", file);

    let path = __dirname + "/files/" + Date.now()+`.${file.name.split('.')[1]}`;
    console.log("path ->",path)
    file.mv(path, (err) => {
      
        console.log("Error moving file:", err);
      
    });

    res.json({
      success: true,
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.log("Error uploading file to server:", error);
   
  }
};

module.exports = fileupload;


function issupported(type,supportedtype){
 return supportedtype.includes(type);
}

async function cloudinaryupload(file,folder){
  const option={folder};
 return await file.cloudinary.uploader.upload(file.tempFilePath,option);
} 
exports.imageupload= async (req,res) => {
try{
   const {tag,name,email}=req.body;

   console.log(tag,name,email);

   const file=req.files.imageup;
   console.log(file);

   const supportedtype=["jpg","png","jpeg"];
   const type=file.split('.')[1].toLowerCase();

   if(!issupported(type,supportedtype)){
    return res.status(200).json({
      success:false,
      message:'file formate not supported'
    });
   }

const response=await cloudinaryupload(file,"filehandling")
  res.status(200).json({
    success:true,
    message:"image uploaded successfilly"
  });
}
catch(err){
console.log(err);
res.status(500).json({
  success:false,
  message:"something went wrong"
});
}
}