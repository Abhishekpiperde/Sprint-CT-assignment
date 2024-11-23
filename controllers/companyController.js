const { Company, User } = require("../models");

exports.deleteCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const result = await Company.destroy({ where: { id: companyId } });
    if (result) {
      return res.status(200).json({ message: "Company deleted Successfully." });
    }
    res.status(404).json({ error: "Company not found." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUsersByCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findByPk(companyId, {
      include: { model: User, through: { attributes: [] } },
    });
    if (company) res.status(200).json(company.Users);
    else res.status(404).json({ error: "Company not found." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCompany = async (req, res) => {
  try {
    const { name, city } = req.body;

    if (!name || !city) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newCompany = await Company.create({ name, city });
    return res
      .status(201)
      .json({ message: "Company created successfully.", data: newCompany });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creating company.", error: error.message });
  }
};
