const express = require('express');
const router = express.Router();
const cors = require('../middlewares/corsConfig');
const accountController = require('../controllers/accountController');
const requireAuth = require('../middlewares/authMiddleware');

//middlewares 
router.use(cors);




module.exports = router;
