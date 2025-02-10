const express = require("express");
const HomeController = require("../controllers/homecontroller");

const router = express.Router();

let ctrl = new HomeController();

router.get('/',ctrl.teste);

module.exports = router;