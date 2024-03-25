const express = require('express');
const router = express.Router();
const {check}  = require('../../controllers/index')

router.get('/', check.control)
module.exports=router