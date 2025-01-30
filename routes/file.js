// const express=require("express");
// const router=express.Router();

// const {localfileupload}=require("../controller/fileupload");

// router.post("/localfileupload",localfileupload);
// // router.post("/imageupload",imageupload);

// module.exports=router;

const express = require("express");
const router = express.Router();

// const { localFileUpload } = require("../controllers/fileupload");
const  {fileupload, imageuplod}  = require("../controller/fileup");
router.post("/localFileUpload",  fileupload);
router.post("/imageupload",imageupload);
module.exports = router;
