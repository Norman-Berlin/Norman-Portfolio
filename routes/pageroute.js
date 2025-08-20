const express = require('express');
const path = require ('path');


const router = express.Router();

router.get('/login', (reg, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

router.get('/dashboard', (reg, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'dashboard.html'));
});

router.get('/register', (reg, res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
});


module.exports = router;