const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  // 유저와 관련된 필드 작성
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    // trim: true 빈 공백을 없애주는 역할
    trim: true,
    // 똑같은 이메일은 사용못하게 금지
    unique: 1
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,

  // 유효성 검사
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }