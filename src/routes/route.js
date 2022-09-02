const express = require("express");
const path = require('path');

const { xl_To_xl_Generate } = require("../controller/root.controller");

const router = express.Router();

router.all("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/../view/root.html'));
})

router.post("/xlsx", xl_To_xl_Generate);

module.exports = router;
