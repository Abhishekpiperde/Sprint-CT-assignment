const { Company, User } = require("../models");

exports.allocateUserToCompanies = async (req, res) => {
  try {
    const { userId, companyIds } = req.body;
    const user = await User.findByPk(userId);
    if (!user) return res.status(404).json({ error: "User not found." });

    const companies = await Company.findAll({ where: { id: companyIds } });
    if (companies.length !== companyIds.length) {
      return res.status(404).json({ error: "Some companies not found." });
    }

    await user.setCompanies(companies);
    res
      .status(200)
      .json({ message: "User allocated to companies successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: { model: Company, through: { attributes: [] } },
    });

    const formattedUsers = users.map((user) => ({
      name: user.name,
      email: user.email,
      phone: user.phone,
      companies: user.Companies.map((c) => c.name).join(", "),
    }));

    res.status(200).json(formattedUsers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({ message: "name, email, phone are required." });
    }
    const newUser = await User.create({ name, email, phone });
    return res
      .status(201)
      .json({ message: `User (${name}) created Sucessfully`, data: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
