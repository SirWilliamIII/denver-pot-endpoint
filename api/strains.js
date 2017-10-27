const express = require("express");

const router = express.Router()

const strains = require('./lib/strains')

router.get("/", (req, res) => {
    res.json(strains);
})


module.exports = router;
