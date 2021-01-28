const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

app.use("/api", require("./api"));

app.listen(PORT, () => console.log(`Mixing it on port ${PORT}`));
