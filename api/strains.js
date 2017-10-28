const express = require("express");

const router = express.Router()

const strains = require('./lib/strains')

router.get("/", (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.json(strains);
})


module.exports = router;
