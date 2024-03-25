const express = require('express');
const router = express.Router();
const info =require('./inforouter')
const createticket = require('./ticket-router')
router.use('/info',info );
router.use('/ticket',createticket)
module.exports=router