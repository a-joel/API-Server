const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();


const MASTER_PASSWORD_HASH = process.env.MASTER_PASSWORD_HASH;
const JWT_SECRET = process.env.JWT_SECRET;

// --- ROUTES ---

// 1. LOGIN: Check password & set cookie
router.post('/login', async (req, res) => {
    const { password } = req.body;

    // Compare entered password with the hashed password in .env
    const isMatch = await bcrypt.compare(password, MASTER_PASSWORD_HASH);

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a secure token
    const token = jwt.sign({ userId: 'owner' }, JWT_SECRET, { expiresIn: '24h' });

    // 🍪 Set the HttpOnly cookie (Frontend JS cannot see or change this)
    res.cookie('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
        sameSite: 'strict',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    });

    res.json({ success: true });
});

// 2. CHECK AUTH: Used by the frontend useEffect to see if cookie exists
router.get('/check-auth', requireAuth, (req, res) => {
    res.json({ authenticated: true });
});

// 3. PROTECTED ROUTE: Example of how you protect your actual data
router.get('/home-data', requireAuth, (req, res) => {
    res.json({ message: "Welcome to the secret home page!", data: ["Secret Item 1", "Secret Item 2"] });
});

// 4. LOGOUT: Clear the cookie
router.post('/logout', (req, res) => {
    res.clearCookie('auth_token');
    res.json({ success: true });
});

// --- MIDDLEWARE ---
function requireAuth(req, res, next) {
    const token = req.cookies.auth_token;
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    try {
        jwt.verify(token, JWT_SECRET);
        next(); // Access granted
    } catch (err) {
        res.status(403).json({ message: 'Invalid session' });
    }
}

module.exports = router;