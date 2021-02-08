const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String
});

const User = model('User', UserSchema);


function signIn(req, res) {
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

module.exports = {
    signIn
}