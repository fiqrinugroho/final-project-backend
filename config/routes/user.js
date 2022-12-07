const router = require("express").Router();

const user = require("../../app/controllers/userController");

// middleware
const Authentication = require("../../middlewares/authenticate");

router.get("/:id", Authentication, user.getUserById);
router.put("/update/:id", Authentication, user.updateUser);
router.delete("/:id", Authentication, user.deleteUser);

module.exports = router;
