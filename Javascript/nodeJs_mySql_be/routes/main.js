"use strict";

const express = require('express')
const router = express.Router()
const {addData,getAll,deleteData}  = require('../controllers/main')


router.post('/', addData)
router.get('/', getAll)
router.delete('/:id', deleteData)
router.put('/:id', deleteData)




module.exports = router