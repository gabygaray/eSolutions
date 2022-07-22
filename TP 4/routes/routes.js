const express = require("express");
const router = express.Router();

router.use("/users", require("./routesUsers"));
router.use("/companies", require("./routesCompanies"));

module.exports = router;
