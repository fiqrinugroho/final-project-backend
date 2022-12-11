const router = require("express").Router();

// controller
const auth = require("../../app/controllers/authController");

// middleware
// const Authentication = require("../../middlewares/authenticate");

// API auth
// router.get("/user", Authentication, auth.user);
router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/login/admin", auth.loginAdmin);

module.exports = router;
