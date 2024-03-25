const express = require('express');
const router = express.Router();
const {createticket} = require('../../controllers/index')

router.get('/',createticket.createticketcontroller)
module.exports=router