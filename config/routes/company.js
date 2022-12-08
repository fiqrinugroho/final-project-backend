const router = require("express").Router();

// controller
const company = require("../../app/controllers/companyController");

// middleware
const Authentication = require("../../middlewares/authenticate");
const isAdmin = require("../../middlewares/isAdmin");
const Uploader = require("../../middlewares/uploader");

router.post(
  "/create",
  Authentication,
  isAdmin,
  Uploader.single("image"),
  company.createCompany
);
router.get("/", company.getCompany);
router.get("/:id", company.getCompanyById);
router.put(
  "/update/:id",
  Authentication,
  isAdmin,
  Uploader.single("image"),
  company.updateCompany
);
// router.delete("/delete/:id", Authentication, isAdmin, company.deleteCompany);

module.exports = router;
