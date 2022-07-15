const express = require("express");
const Model = require("../models/companyModel");
const ModelUser = require("../models/userModel");
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

    const companyToUpdate = await Model.findById(id);
    const users = await ModelUser.find();

    const options = { new: true };
    const data = await Model.findByIdAndUpdate(id, updatedData, options);

    users.forEach((user) => {
      console.log(user.company.name);
      user.company.name === companyToUpdate.name
        ? (user.company = data)
        : user.company;
      user.save();
    });

    console.log(data);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Método DELETE para la creaión de datos en la BD.
router.delete("/companies/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const companyToDelete = await Model.findById(id);
    const users = await ModelUser.find();

    users.forEach((user) => {
      user.company.name === companyToDelete.name
        ? (user.company.name = "Aún no posee")
        : user.company;
      user.save();
    });

    const data = await Model.findByIdAndDelete(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
