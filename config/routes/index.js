const router = require("express").Router();

const auth = require("./auth");
const docs = require("./docs");
const airport = require("./airport");
const user = require("./user");
const company = require("./company");
const airplane = require("./airplane");
const ticket = require("./ticket");

// API auth
router.use("/api/auth/", auth);
router.use("/api-docs", docs);
router.use("/api/airport/", airport);
router.use("/api/user/", user);
router.use("/api/company/", company);
router.use("/api/airplane/", airplane);
router.use("/api/ticket/", ticket);

module.exports = router;
