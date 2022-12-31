const router = require("express").Router();

const whistlist = require("../../app/controllers/whistlistController");

// middleware
const Authentication = require("../../middlewares/authenticate");

router.get("/all", Authentication, whistlist.getWish);
router.get("/", Authentication, whistlist.getWishById);
router.post("/create", Authentication, whistlist.createWish);
router.delete("/:id", Authentication, whistlist.deleteWish);

module.exports = router;
