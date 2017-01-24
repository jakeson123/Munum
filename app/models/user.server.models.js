'use strict';

var mongoose = require('mongoose'),
    crypto = require('crypto'),
    schema = mongoose.Schema;

var validatePassword = function(password){
      return (password && password.length > 6);
}

var userSchema = new schema({
  firstName:{
    type: String,
    trim: true,
    required: 'el nombre es obiligatorio'
  },
  lastName:{
    type: String,
    trim: true,
    default: ''
  },
  displayName: {
		type: String,
		trim: true
	},
  email:{
    type: String,
    trim: true,
    unique: true,
    required: 'Email obiligatorio',
    match: [/.+\@.+\..+/, 'Por favor llenar con un email valido']
  },
  password:{
    type: String,
    required: 'La contraseña es obligatoria',
    validate: [validatePassword, 'La contraseña debe de ser minimo de 6 caracteres']
  },
  salt:{
    type: String,
  },
  provider:{
    type: String,
    required: 'El provider es requerido'
  },
  poviderData:{},
  roles:{
    type:[{
      type:String,
      enum: ['user','presi','admin']
    }],
    default:'user'
  },
  updated: {
    type: Date
  },
  created:{
    type: Date,
    default: Date.now
  }
},{collection : 'usersMunum'});

mongoose.model('User', userSchema);
