"use strict";

const {logger} = require('../utils/logger')
const FILE_NAME = 'controllers/users.js'
const User = require('../models/user.model')


exports.addData = async (req, res, next) => {
    try {
        const body = req.body
        logger(res?.locals?.reqId, FILE_NAME, "addData() start", req.body);
        let response = await User.create({name:body.name,email:body.email,phone:body.phone})
        res.send({message:'data added successfully'})              
    } catch (error) {
        next(error)
    }
}
exports.getAll = async (req, res, next) => {
    try {
        logger(res?.locals?.reqId, FILE_NAME, "get all", req.body);
        let response = await User.findAll();
        res.send(response)              
    } catch (error) {
        next(error)
    }
}

exports.deleteData = async (req, res, next) => {
    try {
        if(!req.params.id) throw new Error('id is required')
        logger(res?.locals?.reqId, FILE_NAME, "deleteData");
        let response = await User.destroy({ where:{
            id:req.params.id
        }});
        res.json(response)              
    } catch (error) {
        next(error)
    }
}



