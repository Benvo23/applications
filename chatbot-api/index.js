const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { register, login, deleteAccount } = require('./auth');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', register);
app.post('/login', login);
app.delete('/delete-account', verifyToken, deleteAccount);

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(403).json({ error: 'No token provided.' });
    }

    jwt.verify(token, 'supersecret', (err, decoded) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to authenticate token.' });
        }

        req.userId = decoded.id;
        next();
    });
};

app.post('/chat', verifyToken, async (req, res) => {
    const { message, personality, apiKey } = req.body;

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

        const fullPrompt = `${personality}. ${message}`;

        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const text = response.text();

        res.json({ reply: text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Chatbot API listening at http://localhost:${port}`);
});
