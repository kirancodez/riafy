const express = require("express");
const router = express.Router();
// Routes
const {auth} = require("../controllers/auth")

router.get("/", auth);

module.exports = router;