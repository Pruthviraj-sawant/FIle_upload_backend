// const express = require("express");
// const router = express.Router();

// const { localFileUpload, imageUpload, videoUpload, imageReducer } = require("../controllers/fileUpload");

// //api route
// router.post("/localFileUpload", localFileUpload);
// router.post("/imageUpload", imageUpload);
// router.post("/videoUpload", videoUpload);
// router.post("/imageReducer", imageReducer);

// module.exports = router;

const express = require("express");
const router = express.Router();

// const { localFileUpload } = require("../controllers/fileupload");
const  {fileupload, imageupload,videoupload ,imagreducedeupload}  = require("../controllers/fileUpload");
router.post("/localFileUpload",  fileupload);
router.post("/imageupload",imageupload);
router.post("/videoUpload", videoupload);
router.post("/redudcedimage",imagreducedeupload);
module.exports = router;
