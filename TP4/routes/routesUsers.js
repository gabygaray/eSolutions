const express = require("express");
const Model = require("../models/userModel");
const ModelCompany = require("../models/companyModel");
const router = express.Router();

//Método POST para la creaión de datos en la BD.
router.post("/users", async (req, res) => {
  try {
    const { company } = req.body;
    const companies = await ModelCompany.findById(company);
    const data = new Model({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      company: companies,
    });
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Método GET para la obtención de todos los datos de la BD.
router.get("/users", async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Método GET para obtención de un dato de la BD.
router.get("/users/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Método PUT(PATCH) para actualizar un dato de datos en la BD.
router.put("/users/:id", async (req, res) => {
  try {
    const { company } = req.body;
    const companies = await ModelCompany.findById(company);

    const id = req.params.id;
    const updatedData = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      company: companies.name,
    };

    const options = { new: true };
    const data = await Model.findByIdAndUpdate(id, updatedData, options);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Método POST para la creaión de datos en la BD.
router.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
