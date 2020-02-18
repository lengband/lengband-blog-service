'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const TypeSchema = new Schema({
    name: { // 英文类别
      type: String,
      required: true,
    },
    cn_name: { // 中文类别
      type: String,
      required: true,
    },
    article_num: {
      type: Number,
      default: 0,
    },
  }, {
    timestamps: true, // 将自动添加 createAt 和 updateAt 两个字段
  });

  return mongoose.model('Type', TypeSchema);
};
