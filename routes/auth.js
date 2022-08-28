const express = require("express");


const authController = require('../controllers/authController')
const router = express.Router();

router.get("/signin", authController.loginForm.bind(authController));

router.post("/signin", authController.login.bind(authController));


module.exports = router;
