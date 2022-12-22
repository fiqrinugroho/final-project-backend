const router = require("express").Router();

// controller
const transaction = require("../../app/controllers/transactionController");

// middleware
const Authentication = require("../../middlewares/authenticate");
const isAdmin = require("../../middlewares/isAdmin");

router.post("/add", Authentication, isAdmin, transaction.addTransaction);
router.get("/",  Authentication, transaction.getTransactionByToken);
// router.get("/", ticket.getTicket);
// router.get("/:id", ticket.getTicketById);
// router.put("/update/:id", Authentication, isAdmin, ticket.updateTicket);
// router.delete("/delete/:id", Authentication, isAdmin, ticket.deleteTicket);

module.exports = router;
