'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    avatar_url: { // 头像
      type: String,
    },
    gender: { // 性别
      type: String,
      enum: [ 'male', 'female' ],
      default: 'male',
      required: true,
    },
    headline: { // 一句话介绍
      type: String,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role',
    },
  }, {
    timestamps: true, // 将自动添加 createAt 和 updateAt 两个字段
  });

  return mongoose.model('User', UserSchema);
};
