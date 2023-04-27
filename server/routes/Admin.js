const express = require('express');
const blog = require('../models/blog');
const event = require('../models/event');
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
router.post("/createEvent",async (req,res)=>{
    try {
        const {admin,name,des,dp,address,date}=req.body;
        const hil = await event.create({
            admin,
            name,
            des,
            dp,
            address,
            date,
        })
        if(hil){res.json({status:"ok",event:hil})}
        else{res.json({status:"event Not created"})}
    } catch (error) {
        res.json({status:"error"});
    }
})
router.get('/getevents/:curevents',async (req,res)=>{
    try {
        const {curevents}=req.params;
        const allev = await event.find().sort({created_at:-1}).skip(curevents).limit(6);
        if(allev.length==0){
            res.json({status:"end"});
        }else{
            res.json({status:"ok",events:allev});
        }
    } catch (error) {
        res.json({status:"error"});
    }
})
router.delete("/deleteevent/:eid",async (req,res)=>{
    try {
        const dl = await event.findByIdAndDelete(req.params.eid);
        if(dl){
            res.json({status:"ok"});
        }else{
            res.json({status:"not deleted..."});
        }
    } catch (error) {
        res.json({status:"server Error"});
    }
})

module.exports =router;