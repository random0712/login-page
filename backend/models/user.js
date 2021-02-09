const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String
});

const User = model('User', UserSchema);


function signUp(req, res) {
    const { _id, username, email, password } = req.body;

    if(!username || !email || !password) return res.send({code: 404, error: "There are unfilled fields"})

    if(_id) {
        User.findById(_id, {
            username,
            email,
            password
        }, (err) => {
            if(err) return res.send({code: 503, error: err});

            return res.send({code: 201, data: "Successfully updated"})
        })
    } else {
        bcrypt.hash(password, 10, function(err, hash) {
            if(err) return console.log(err);

            const newUser = new User({
                username,
                email,
                password: hash
            })

            newUser.save((err, user) => {
                if(err) return res.send({code: 503, error: err});

                return res.send({code: 201, data: user});
            })
        });
    }
}

function signIn(req, res) {
    const { email, password } = req.body;

    User.findOne({email}, function(err, user) {
        if(err) return console.log(err);

        if(!user) return res.send({code: 404, error: "User not found!"});

        bcrypt.compare(password, user.password,  function(err, result) {
            if(err) return console.log(err);

            if(!result) return res.send({code: 404, error: "Invalid password!"});

            jwt.sign({ id: user._id }, process.env.AUTH_SECRET, {
                expiresIn: 60
            }, (err, token) => {
                if(err) return console.log(err);

                res.send({code: 200, token, user: {
                        username: user.username,
                        email: user.email
                    }})
            })
        })
    })
}

module.exports = {
    signUp,
    signIn
}