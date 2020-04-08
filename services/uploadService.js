const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + '-' + file.originalname);
    }
});

var upload = multer({ storage: storage }).array('file');

const uploadFiles = (files, result) => {
    return new Promise((resolve, reject) => {
        upload(files, result, function(err) {
            resolve(result);
            reject(err);
        })
    })
}

module.exports = { uploadFiles };