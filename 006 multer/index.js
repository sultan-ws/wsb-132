const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

/* No file */
// const uploads = multer().none();

/* Single file */
// const uploads = multer({ storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './files');
//     },
//     filename: (req, file, cb) => {
//         console.log(file);
//         cb(null, req.body.name + Date.now() + Math.floor(Math.random() * 99999) + path.extname(file.originalname));
//     }
// })}).single('thumbnail');

/* Multiple files with single field */

// const uploads = multer({storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './files');
//     },
//     filename: (req, file, cb) => {
//         cb(null, req.body.name + Date.now() + Math.floor(Math.random() * 99999) + path.extname(file.originalname));
//     }
// })}).array('images', 10);

/* Multiple fields */ 

const uploads = multer({storage: multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './files');
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name + Date.now() + Math.floor(Math.random() * 99999) + path.extname(file.originalname));
    }
})}).fields([
    { name: 'thumbnail', maxCount: 1},
    { name: 'images', maxCount: 10},
]);

app.post('/file-upload', uploads, (req, res) => {
    console.log(req.body);
    //console.log(req.file);  //single file
    console.log(req.files);  //multiple files
    res.status(200).json({message: 'success'});
});

app.listen(5200);