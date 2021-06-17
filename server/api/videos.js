const router = require("express").Router();
const s3 = require("../s3");

function shuffleVideos(array) {
  console.log("Array before shuffle:", array);
  let temp = 0;
  for (let i = array.length - 1; i > 0; i--) {
    console.log("i", i);
    const j = Math.floor(Math.random() * i);
    console.log("J", j);
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  console.log("ARRAY", array);
  const last = array.pop();
  console.log("LAST:", last);
  return last;
}

router.get("/", async (req, res, next) => {
  try {
    const bucketParams = {
      Bucket: "landingpagevideobucket",
    };
    await s3.listObjects(bucketParams, function (err, data) {
      if (err) {
        console.log("Error:", err);
      } else {
        const bucket = data.Contents;
        const allVideos = [];
        bucket.forEach((video, idx) => {
          console.log("idx", idx);
          let videoObj = {};
          const params = {
            Bucket: "landingpagevideobucket",
            Key: bucket[idx].Key,
          };
          s3.getObject(params, function (err, data) {
            try {
              videoObj.name = data.Metadata.name;
              videoObj.date = data.Metadata.date;
            } catch (error) {
              console.log(error);
            }
          });

          videoObj.id = idx + 1;

          videoObj.url = s3.getSignedUrl("getObject", {
            Bucket: "landingpagevideobucket",
            Key: bucket[idx].Key,
            // Expires: 200,
          });
          allVideos.push(videoObj);
          console.log("allVideos", allVideos);
        });

        res.json(shuffleVideos(allVideos));
      }
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
