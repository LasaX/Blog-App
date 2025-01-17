import express from 'express';
const router= express.Router();

router.get('/',async (req,res)=>{
    res.send("blog routes is here")
})
module.exports = router;