const fs = require('fs');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const DB_FILE = './db.json';

const readDB = () => {
    const db = fs.readFileSync(DB_FILE);
    return JSON.parse(db);
};

const writeDB = (db) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
};

const register = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    const db = readDB();

    if (db.users.find(user => user.username === username)) {
        return res.status(400).json({ error: 'Username already exists.' });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const newUser = {
        id: db.users.length + 1,
        username,
        password: hashedPassword,
        apiKey: null
    };

    db.users.push(newUser);
    writeDB(db);

    res.status(201).json({ message: 'User registered successfully.' });
};

const login = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    const db = readDB();

    const user = db.users.find(user => user.username === username);

    if (!user) {
        return res.status(404).json({ error: 'User not found.' });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
        return res.status(401).json({ error: 'Invalid password.' });
    }

    const token = jwt.sign({ id: user.id }, 'supersecret', {
        expiresIn: 86400 // 24 hours
    });

    res.status(200).json({ auth: true, token });
};

const deleteAccount = (req, res) => {
    const userId = req.userId;

    const db = readDB();

    const userIndex = db.users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found.' });
    }

    db.users.splice(userIndex, 1);
    writeDB(db);

    res.status(200).json({ message: 'Account deleted successfully.' });
};

module.exports = { register, login, deleteAccount };