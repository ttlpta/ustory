const mongoose = require('mongoose');

const userShema = mongoose.Schema({
  email: { type : String, unique: true, required: true },
  password: { type : String, required: true },
  expriedTime : String,
  firstname : String,
  lastname: String,
  nickname: String,
  fbId: String,
  ggId: String,
  phone: String,
  cmnd: String,
  birthday: { type: Date, default: Date.now },
  avatar: String,
  address: String,
  bookmark: Array,
  type: Number,
});

module.exports = mongoose.model('User', userShema);
