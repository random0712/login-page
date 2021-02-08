require('dotenv/config');
require('./config/mongo');

const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

//Models Functions
const { signIn } = require("./models/user");

// Configuring Express
app.use(cors());
app.use(bodyParser.json());

// Routes
app.route('/login')
    .post((req, res) => signIn(req, res))

app.listen(process.env.BACKEND_PORT, () => {
    console.log("Backend is running in port " + process.env.BACKEND_PORT);
})

