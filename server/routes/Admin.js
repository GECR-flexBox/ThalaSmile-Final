const express = require('express');
const blog = require('../models/blog');
const router = express.Router();




router.post("/createblog",async (req,res)=>{
    try {
        const {author,title,desc,dp}=req.body;
        const bg = await blog.create({
            author,title,desc,dp
        })
        if(bg){res.json({status:'ok',bg})}
        else{res.json({status:"server error"})}
    } catch (error) {
        res.json({status:"server error"})
    }
})
router.get("/getblog/:curlenth",async (req,res)=>{
    try {
        const {curlenth}=req.params;
        const blogs = await blog.find().sort({updated_at:-1}).skip(curlenth).limit(4);
        if(blogs.length==0){
            res.json({status:"end"});
        }else{
            res.json({status:"ok",blogs});
        }
        
    } catch (error) {
        res.json({status:'error'});
    }
})
router.delete("/deleteblog/:bid",async (req,res)=>{
    try {
        const {bid}=req.params;
        await blog.findByIdAndDelete(bid);
        res.json({status:"ok"});
    } catch (error) {
        res.json({status:"server error"});
    }
})

module.exports =router;