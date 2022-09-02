const express = require("express");
const multer = require("multer");
const route = require("./src/routes/route");
const PORT = process.env.PORT || 2999;

const app = express();

app.use(express.json());

app.use(multer().any());

app.use("/", route);

app.use("/**", (req, res) => {
    res.status(404).send({
        status: !true,
        message: "The API you trying to access is unavalable!",
    });
});

app.listen(PORT, (e) => {
    if (e) return console.log("⚠️", e.message);
    return console.log("✅ Server Connected With Port Number", PORT);
});
