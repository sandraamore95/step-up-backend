const express=require('express');
const router=express.Router();
const cors = require('../helpers/corsConfig');
const { test,register,login,profile,logout} = require('../controllers/authController');


//middlewares 
router.use(cors);

router.get('/',test)
router.post('/register',register)
router.post('/login',login)
router.get('/profile',profile)
router.get('/logout',logout)

module.exports=router;