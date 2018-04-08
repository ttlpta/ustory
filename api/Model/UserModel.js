module.exports = mongoose => {
  const userShema = mongoose.Schema({
    email: { type : String, unique: true, required: true },
    password: { type : String, required: true },
    expriedTime : String,
    firstname : String,
    lastname: String,
    nickname: String,
    fbId: String,
    ggId: String,
    avatar: String,
    bookmark: Array,
    books: Array,
  });

  return mongoose.model('User', userShema);
}