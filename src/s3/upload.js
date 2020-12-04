const {s3} = require("../config/index")

async function upload(file, fileName) {

    const params = {
        Bucket: process.env.BUCKET,
        Key: fileName + '.jpg',
        Body: file.buffer,
        ACL:'public-read'
    };

    const res = await s3.upload(params).promise()
    return res.Location
};



module.exports = {
    upload
}
