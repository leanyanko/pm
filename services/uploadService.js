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

const uploadFiles = (request, result) => {
    // request.files - files
    //request.callback - callback to post new entry to the database
    return new Promise((resolve, reject) => {
        upload(request.files, result, function(err) {
            resolve(result);
            reject(err);
        })
    })
}

module.exports = { uploadFiles };