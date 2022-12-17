const router = require("express").Router();

// controller
const ticket = require("../../app/controllers/ticketController");

// middleware
const Authentication = require("../../middlewares/authenticate");
const isAdmin = require("../../middlewares/isAdmin");

router.post("/create", Authentication, isAdmin, ticket.createTicket);
router.get("/", ticket.getTicket);
router.get("/:id", ticket.getTicketById);
router.put("/update/:id", Authentication, isAdmin, ticket.updateTicket);
router.delete("/delete/:id", Authentication, isAdmin, ticket.deleteTicket);

module.exports = router;
