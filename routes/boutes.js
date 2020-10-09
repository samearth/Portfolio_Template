const express = require('express');
const router = express.Router();

router.get('/' , (req,res)=>{
    res.sendFile('index.html',{root:'./views'});
});

router.get('/know-me' , (req,res)=>{
    res.sendFile('my.html',{root:'./views'});
});

module.exports = router;