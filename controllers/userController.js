const { Company, User } = require("../models");

exports.allocateUserToCompanies = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listUsers = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;;
    if (!name || !email || !phone){
        return res.status(400).json({ message: "name, email, phone are required." });
    }
        const newUser = await User.create({ name, email, phone });
        return res.status(201).json({message:`User (${name}) created Sucessfully`,data:newUser})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
