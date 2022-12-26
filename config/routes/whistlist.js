const router = require("express").Router();

const whistlist = require("../../app/controllers/whistlistController");

// middleware
const Authentication = require("../../middlewares/authenticate");

// router.get("/", Authentication, user.getUserById);
router.post("/create", Authentication, whistlist.createWish);
// router.delete("/:id", Authentication, user.deleteUser);

module.exports = router;
