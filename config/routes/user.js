const router = require("express").Router();

const user = require("../../app/controllers/userController");

// middleware
const Authentication = require("../../middlewares/authenticate");

router.get("/", Authentication, user.getUserById);
router.put("/update/", Authentication, user.updateUser);
router.delete("/:id", Authentication, user.deleteUser);

module.exports = router;
