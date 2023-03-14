const express = require('express')
const { User, Show } = require('../models')
const router = express.Router()
router.use(express.json());
router.use(express.urlencoded({extended:true}));
router.get('/',async(req,res)=>{
    const foundUser = await User.findAll()
    res.json(foundUser)
})
router.put('/:id/watched/:title',async(req,res)=>{
    
    const id = req.params.id
    const titles = req.params.title

    const findUser = await User.findByPk(id)
    await Show.update({
        userId:findUser.id},
        {where:{title:titles}
    })
    res.json('watched show')
})
router.get('/:id/shows',async(req,res)=>{
    const id = req.params.id
    const foundUserShows= await Show.findAll({
        where:{userId:id} 
    });
    res.json(foundUserShows)
})
router.get('/:id',async(req,res)=>{
    const id = req.params.id
    const findUser = await User.findByPk(id)
    res.json(findUser.id)
})









module.exports = router