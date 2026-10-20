const mongoose = require('mongoose');
const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);

const dbConnect = async() => {
    try {
        const kapcsolat = await mongoose.connect(process.env.MONGO_DB);
        return kapcsolat;
    } catch (error) {
        console.log(`Adatbázis kapcsolat hiba: ${error.message}`);
    }
};

module.exports = dbConnect;