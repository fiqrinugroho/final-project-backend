const router = require("express").Router();

const auth = require("./auth");

// API auth
router.use("/api/auth/", auth);

module.exports = router;
