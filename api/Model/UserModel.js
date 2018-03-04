module.exports = mongoose => {
  const userShema = mongoose.Schema({
    email: { type : String, unique: true, required: [true, 'aaaaaaaaaaaaa'] },
    password: { type : String, required: true },
    firstname : String,
    lastname: String,
    nickname: String,
    fbid: String,
    avatar: String,
    bookmark: Array,
    books: Array,
  });

  return mongoose.model('User', userShema);
}