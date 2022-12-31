const router = require("express").Router();

// controller
const transaction = require("../../app/controllers/transactionController");

// middleware
const Authentication = require("../../middlewares/authenticate");
const isAdmin = require("../../middlewares/isAdmin");

// endpoint for admin
router.get("/admin/filter", Authentication, isAdmin, transaction.getTransactionByStatus);
router.get("/admin/trip", Authentication, isAdmin, transaction.getTransactionByTripId);
router.get("/admin", Authentication, isAdmin, transaction.getTransaction);
router.get("/admin/:id", Authentication, isAdmin, transaction.getTransactionById);
router.put("/admin/update/:id", Authentication, isAdmin, transaction.updateTransactionAdmin);
router.delete("/admin/delete/:id", Authentication, isAdmin, transaction.deleteTransactionAdmin);

// endpoint for user
router.get("/filter", Authentication, transaction.getTransactionByTokenAndStatus);
router.get("/trip", Authentication, transaction.getTransactionByTokenAndTripId);
router.get("/", Authentication, transaction.getTransactionByToken);
router.get("/:id", Authentication, transaction.getTransactionByTokenAndId);
router.post("/add", Authentication, transaction.addTransaction);
router.put("/update/:id", Authentication, transaction.updateTransaction);
router.put("/cancel/:id", Authentication, transaction.cancelTransaction);

module.exports = router;
