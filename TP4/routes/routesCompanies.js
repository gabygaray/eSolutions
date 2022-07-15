const express = require("express");
const Model = require("../models/companyModel");
const router = express.Router();

//Método POST para la creaión de datos en la BD.
router.post("/companies", async (req, res) => {
  const data = new Model({
    name: req.body.name,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Método GET para la obtención de todos los datos de la BD.
router.get("/companies", async (req, res) => {
  try {
    const data = await Model.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Método GET para obtención de un dato de la BD.
router.get("/companies/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Método PUT(PATCH) para actualizar un dato de datos en la BD.
router.put("/companies/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true }; //Significa que lo va a guardar en la base de datos
    const data = await Model.findByIdAndUpdate(id, updatedData, options);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Método POST para la creaión de datos en la BD.
router.delete("/companies/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
