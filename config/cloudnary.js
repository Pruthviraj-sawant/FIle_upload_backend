const cloud=require("cloudinary");

exports.cloudconnect =()=>{
    try{
cloud.config({
    cloud_name:process.env.CLOUD_NAME,
   api_key: process.env.API_KEY,
   api_secarate: process.env.API_SECARATE

})
    }catch(error){
console.error(error);
    }
}