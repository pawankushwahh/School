require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const allowedOrigins = [
    'https://your-app-frontend.onrender.com',
    'http://localhost:3000' // for local development
];

app.use(cors({
    origin: function(origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Basic test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 