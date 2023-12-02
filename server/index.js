const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const UserModel = require('./models/UserModel');
const postblog = require('./models/PostModal');
const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}));
app.use(cookieParser());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json("The token is missing!");
    } else {
        jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
            if (err) {
                return res.json("The token is invalid!");
            } else {
                req.email = decoded.email;
                req.username = decoded.username;
                next();
            }
        });
    }
};

app.get('/', (req, res) => {
    return res.json({ email: req.email, username: req.username });
});

app.post('/register', (req, res) => {
    const { username, password, email } = req.body;
    bcrypt.hash(password, 10)
        .then(hash => {
            UserModel.create({ username, email, password: hash })
                .then(user => res.json(user))
                .catch(err => res.json(err));
        })
        .catch(err => res.json(err));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign(
                            { email: user.email, username: user.username },
                            "jwt-secret-key",
                            { expiresIn: '1d' }
                        );
                        res.cookie('token', token);
                        return res.json('Successful login');
                    } else {
                        return res.json("Password is not correct");
                    }
                });
            } else {
                res.json('User not present');
            }
        });
});

app.get('logout', (req, res) => {
    res.clearCookie('token');
    return res.json('User logged out successfully');
})

const storage = multer.diskStorage({
    destination: (req, file, cd) => {
        cd(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cd(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})
app.post('/create', upload.single('file'), (req, res) => {
    console.log(req.file)
})

app.listen(3001, () => {
    console.log("The server is running on port 3001");
});