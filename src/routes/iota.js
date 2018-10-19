'use strict';


const express = require('express');
let router = express.Router();

router.get('/test', (req, res) => {
    res.json({value: 'iota test'});
});
router.post('/send', (req, res) => {
    if(req.body.value){
        res.json({message: `you sent us ${req.body.value}`});
    }else{
        res.json({message:  'you did not send a good value'});
    }
});

module.exports = router;