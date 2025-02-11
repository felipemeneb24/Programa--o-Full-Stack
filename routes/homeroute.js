const express = require("express");
const HomeController = require("../controllers/homecontroller");

const router = express.Router();

let ctrl = new HomeController();

router.get('/',ctrl.teste);
router.get('/carros',ctrl.carros)
router.get('/cadastro', ctrl.cadastro);
router.post('/cadastro', ctrl.cadastroPost);

module.exports = router;