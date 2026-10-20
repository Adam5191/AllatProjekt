// npm csomagok
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const ejs = require('ejs');
const path = require('path');


// környezeti változók kezelése
dotenv.config();
const PORT = process.env.PORT || 3600;

// app létrehozása
const app = express();

// middleware-k
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', ejs);
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// app figyelő módba állítása
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/api`);
});

// Route-ok
app.get('/api', (req, res) => {
    try {
        return res.status(200).render('index.ejs');
    } catch (error) {
        return res.status(500).json({ msg: `Hiba: ${error.message}` });
    }
});

// adatbázis csatlakozás
const dbConnection = require('./utils/dbConnect.js');

dbConnection()
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');

        // app figyelő módba állítása
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}/api`);
        });
    })
    .catch((error) => {
        console.error(`Hiba: ${error.message}`);
    });