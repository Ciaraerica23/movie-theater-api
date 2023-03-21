const express = require('express')
const { Show, User } = require('../models')
const router = express.Router()

router.get('/',async(req,res)=>{
    const found = await Show.findAll()
    res.json(found)
})

router.get('/:genre',async(req,res)=>{
    const genres = req.params.genre
    const found = await Show.findAll({
        where:{genre:genres}
    })
    res.json(found)
})
router.put('/:title',async(req,res)=>{
    const titles = req.params.title
    await Show.update({
        status:'cancelled'},
        {where:{title:titles}
    })
})
router.put('/:title',[check("title").not().isEmpty().trim()],async(req,res)=>{
    const titles = req.params.title
    await Show.update({
        status:'on-going'},
        {where:{title:titles}
    })
})
router.put('/:id/rating',[check("id").not().isEmpty().trim()],async(req,res)=>{
    const id = req.params.id
    const findUsers = await User.findByPk(id)
        await Show.update({
            rating:+1},
            {where:{userId:id}
        })
        const findShow= await Show.findAll({

        })
    res.json(findShow)
  
})
router.get('/:id',async(req,res)=>{
    const id = req.params.id
    const found = await Show.findByPk(id)
    res.json(found)
})
router.delete('/:id',async(req,res)=>{
    const id = req.params.id
    const found = await Show.findByPk(id)
    await found.destroy()
    res.json(found)
})







module.exports = router