const express = require("express");

const router = express.Router();

const {
    analyzeIncident
} = require("../controllers/analyzeController");

const validateIncident = require("../middleware/validateIncident");


router.post(
    "/",
    validateIncident,
    analyzeIncident
);


module.exports = router;