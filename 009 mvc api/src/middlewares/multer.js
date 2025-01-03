const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/files');
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name + Date.now() + Math.floor(Math.random() * 99999) + path.extname(file.originalname));
    }
});

const fileUpload = multer({ storage }).fields([
    {
        name: 'thumbnail',
        maxCount: 1
    },
    {
        name: 'images',
        maxCount: 10
    }
]);

module.exports = fileUpload;