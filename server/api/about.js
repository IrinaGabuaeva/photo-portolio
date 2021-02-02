const router = require("express").Router();
const s3 = require("../credentials");

const getPictures = (pics) => {
  return pics;
};
router.get("/", async (req, res, next) => {
  try {
    const bucketParams = {
      Bucket: "aboutpicturesbucket",
    };
    await s3.listObjects(bucketParams, function (err, data) {
      if (err) {
        console.log("Error:", err);
      } else {
        const bucket = data.Contents;
        const allPictures = [];
        bucket.forEach((picture, idx) => {
          let pictureObj = {};
          const params = {
            Bucket: "aboutpicturesbucket",
            Key: bucket[idx].Key,
          };
          s3.getObject(params, function (err, data) {
            try {
              pictureObj.name = data.Metadata.name;
              pictureObj.date = data.Metadata.date;
            } catch (error) {
              console.log(error);
            }
          });

          pictureObj.id = idx + 1;

          pictureObj.url = s3.getSignedUrl("getObject", {
            Bucket: "aboutpicturesbucket",
            Key: bucket[idx].Key,
            // Expires: 200,
          });

          allPictures.push(pictureObj);
        });

        res.json(getPictures(allPictures));
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
