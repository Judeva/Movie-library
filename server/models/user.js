const mongoose = require('mongoose');
const SALT_ROUNDS = 10;
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    favorites: [{
        type: mongoose.Types.ObjectId,
        ref: 'Movie'
    }],

});

userSchema.methods = {
    matchPassword: function (password) {
        return password === this.password;
    }
}

userSchema.pre('save', function (next) {

    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => {
            this.password = hash;
            next();
        });
});



module.exports = mongoose.model('User', userSchema);