const config = {
    credentials: true,
    origin: [
       'http://localhost:3000',
       'localhost:3000',
       'http://10.8.33.76:3000',
       '10.8.33.76:3000',
       "http://localhost:8080",
       "localhost:8080",
       "http://127.0.0.1:5173",
       "127.0.0.1:5173",
       "http://localhost:3001",
       "localhost:3001",
       "https://join.iyteyazilim.com",
       "join.iyteyazilim.com"
    ],
    default: 'https://join.iyteyazilim.com',
    optionsSuccessStatus: 200
 };

module.exports = config;