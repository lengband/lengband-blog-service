'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    cn_name: { // 昵称
      type: String,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    email: {
      type: String,
    },
    post_num: {
      type: Number,
      default: 0,
    },
    comment_num: {
      type: Number,
      default: 0,
    },
    avatar: { // 头像
      type: String,
    },
    role: {
      type: String,
      enum: [ 'member', 'admin' ],
      default: 'member',
    },
    gender: {
      type: String,
      enum: [ 'male', 'female' ],
      default: 'male',
    },
    last_login_time: {
      type: Date,
      default: Date.now,
    },
    notice: { // 是否开启邮件通知，既有评论的时候通知
      type: Boolean,
      default: false,
    },
    website: { // 保留字段，没想好用途
      type: String,
    },
    github: {
      type: String,
    },
    description: {
      type: String,
    },
  }, {
    timestamps: true, // 将自动添加 createAt 和 updateAt 两个字段
  });

  return mongoose.model('User', UserSchema);
};
