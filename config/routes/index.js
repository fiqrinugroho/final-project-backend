const router = require("express").Router();

const auth = require("./auth");
const docs = require("./docs");
const airport = require("./airport");

// API auth
router.use("/api/auth/", auth);
router.use("/api-docs", docs);
router.use("/api/airport/", airport);

module.exports = router;
