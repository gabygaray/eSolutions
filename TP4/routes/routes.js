const express = require("express");
const router = express.Router();

router.all("/users", require("./routesUsers"));
router.all("/users/:id", require("./routesUsers"));
router.all("/companies", require("./routesCompanies"));
router.all("/companies/:id", require("./routesCompanies"));

module.exports = router;
