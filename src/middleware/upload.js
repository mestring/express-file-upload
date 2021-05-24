const util = require("util");
const multer = require("multer");
const maxSize = 7 * 1024 * 1024;
const fs = require("fs");
const uploadDir  = require("../../dir.js");

//let d = new Date();
//let dd = d.getDate();
//let mm = d.getMonth()+1;
//let yyyy = d.getFullYear();

//if(dd<10)
//   { dd = '0'+ dd;
//   }

//if(mm<10)
//   { mm = '0'+ mm;
//   }

//let date = yyyy+mm+dd;

//let dir = __basedir + "/resources/static/assets/uploads/" + date;

 let dir = uploadDir;

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dir);
  },   filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
