require('dotenv/config');
require('./config/mongo');

const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

const validateJWT = require('./authToken');

//Models Functions
const { signUp, signIn } = require("./models/user");

// Configuring Express
app.use(cors());
app.use(bodyParser.json());

// Routes
app.route('/signup')
    .post((req, res) => signUp(req, res))

app.route('/signin')
    .post((req, res) => signIn(req, res))

app.route('/token')
    .get(validateJWT, (req, res) => res.send("Token valido"))

app.listen(process.env.BACKEND_PORT, () => {
    console.log("Backend is running in port " + process.env.BACKEND_PORT);
})

