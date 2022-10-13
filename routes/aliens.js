const express = require('express');
const router = express.Router();
const Alien = require('../models/alien')

router.get('/', async(req,res) => {
    try{
        const aliens = await Alien.find();
        res.json(aliens);
    }catch(err){
        res.status(500).json({ err });
    }
})

router.get('/:id', async(req,res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    }catch(err){
        res.status(500).json({ err });
    }
})

router.post('/', async(req,res) => {
    const { name, tech, sub } = req.body;
    const alien = new Alien({ name, tech, sub });

    try{
        const a1 = await alien.save();
        res.send(a1);
    }catch(err){
        res.status(500).json({ err });
    }
})

router.patch('/:id', async(req,res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        const { name, tech, sub } = req.body;
        if (!name) {
            alien.name = name;
        }
        if (!tech) {
            alien.tech = tech;
        }
        if (!sub) {
            alien.sub = sub;
        }
        
        const a1 = await alien.save();
        res.json(a1);
    }catch (err) {
        res.status(500).json({ err });
    }
})

router.delete('/:id', async(req,res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        const a1 = await alien.deleteOne();
        res.json(a1);
    } catch(err) {
        res.status(500).json({ err });
    }
})

//Export the router
module.exports = router
