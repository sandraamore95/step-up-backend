const express=require('express');
const router=express.Router();
const cors = require('../middlewares/corsConfig');
const { test,register,login,profile,logout} = require('../controllers/authController');


//middlewares 
router.use(cors);

router.get('/',test)
router.post('/register',register)
router.post('/login',login)
router.get('/profile',profile)
router.post('/logout',logout)

module.exports=router;