const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose'); // Corregido
const cookieParser = require('cookie-parser');
const shoeRoutes = require('./routes/shoeRoutes');
const collectionRoutes = require('./routes/collectionRoutes');
const offersRoutes = require('./routes/offersRoutes');
const authRoutes = require('./routes/authRoutes');
const shoeController = require('./controllers/shoeController');
const app = express();

// Connection to Database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Database connected!");
        shoeController.insertInitialData();
    })
    .catch((err) => {
        console.error("Database connection failed", err);
    });

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', authRoutes);
app.use('/', shoeRoutes);
app.use('/', collectionRoutes);
app.use('/', offersRoutes);

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


