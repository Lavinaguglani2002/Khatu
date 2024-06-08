const express=require('express');
const { signup,login, submitotp, sendotp } = require('../controller/userController');

const router=express.Router();
router.post("/signup",signup)
router.post("/login",login)
    
router.post("/submit-otp",submitotp)
router.post("/send-otp",sendotp)


module.exports = router;
