const express = require("express");
const {
  createCompany,
  deleteCompany,
  getUsersByCompany,
} = require("../controllers/companyController");
const router = express.Router();

router.delete("/:companyId", deleteCompany);
router.get("/:companyId/users", getUsersByCompany);
router.post("/", createCompany);
module.exports = router;
