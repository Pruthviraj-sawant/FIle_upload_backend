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
const  {fileupload, imageupload}  = require("../controllers/fileUpload");
router.post("/localFileUpload",  fileupload);
router.post("/imageupload",imageupload);
module.exports = router;
