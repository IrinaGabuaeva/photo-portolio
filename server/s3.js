const AWS = require("aws-sdk");
AWS.config = new AWS.Config();

const s3 = new AWS.S3({
  signatureVersion: "v4",
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  Bucket: [
    "landingpagevideobucket",
    "aboutpicturesbucket",
    "naturepicturesbucket",
    "nycpicturesbucket",
    "devpicturesbucket",
    "peoplepicturesbucket",
  ],
  region: "us-east-2",
});

module.exports = s3;
