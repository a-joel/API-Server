const express = require('express');
const cors = require('cors')
require('dotenv').config();
const authenticateRoute = require('./routes/authentication');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cookieParser());

// 🌟 CRITICAL: CORS must allow credentials for cookies to work
app.use(cors({
    origin: 'http://localhost:5173', // ⚠️ Change this to your actual frontend URL (e.g., http://localhost:5173)
    credentials: true                // Allows the browser to send/receive cookies
}));

app.use('/api', authenticateRoute);

app.listen(5000, () => console.log('✅ Backend running on port 5000'));