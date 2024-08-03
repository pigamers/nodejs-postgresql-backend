const express = require('express');
const router = express.Router();

const {
    getpostdetail
} = require('../controllers/postdetail.controller');

// Route for user login
router.get("/getpost", getpostdetail);


module.exports = router;