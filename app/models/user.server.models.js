'use strict';

var mongoose = require('mongoose'),
    crypto = require('crypto'),
    schema = mongoose.Schema;

var validatePassword = {
    validator: function(password) {
        return this.passwordConfirmation == password;
    },
    message: 'las contraseñas no son iguales'
}

var userSchema = new schema({
    firstName: {
        type: String,
        trim: true,
        required: 'el nombre es obiligatorio'
    },
    lastName: {
        type: String,
        trim: true,
        default: ''
    },
    sex: {
        type: [{
            type: String,
            enum: {
                values: ['M', 'F'],
                message: 'Los valores disponibles son M y F'
            }
        }],
        trim: true
    },
    displayName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: 'Email obiligatorio',
        match: [/.+\@.+\..+/, 'Por favor llenar con un email valido']
    },
    password: {
        type: String,
        required: 'La contraseña es obligatoria',
        minlength: [6, 'La contraseña debe de ser minimo de 6 caracteres'],
        validate: validatePassword
    },
    salt: {
        type: String,
    },
    provider: {
        type: String,
        required: 'El provider es requerido'
    },
    poviderData: {},
    roles: {
        type: [{
            type: String,
            enum: {
              values: ['user', 'presi', 'admin'],
              message: 'Los valores disponibles son user, presi, admin'
            }
        }],
        default: 'user'
    },
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'usersMunum'
});

userSchema.virtual('passwordConfirmation')
    .get(function() {
        return this.pC;
    })
    .set(function(p) {
        this.pC = p;
    });

userSchema.pre('save', function(next) {
    if (this.password && this.password.length > 6) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

userSchema.methods.hashPassword = function(password) {
    if (this.salt && password) {
        //puse un parametro mas que dice sha1
        return crypto.pbkdf2Sync(password, this.salt, 10000, 64,'sha1').toString('base64');
    } else {
        return password;
    }
};

//depronto lo borro si no lo necesito
userSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

mongoose.model('User', userSchema);
