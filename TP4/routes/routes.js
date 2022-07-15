const express = require("express");
const router = express.Router();

router.all("/users", require("./routesUsers"));
router.all("/companies", require("./routesCompanies"));

module.exports = router;
