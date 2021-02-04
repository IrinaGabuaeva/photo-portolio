const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 5000;
console.log("PORT!!!", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "build", "index.html")));
app.get("/test", (req, res) => {
  res.end("OK!!!!");
});
app.use("/api", require("./server/api"));

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Mixing it on port ${port}`));
