const router = require("express").Router();

const auth = require("./auth");
const docs = require('./docs');

// API auth
router.use("/api/auth/", auth);
router.use('/api-docs', docs);

module.exports = router;
