'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const TagSchema = new Schema({
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
    tag_status: {
      type: String,
      required: true,
      enum: [ 'default', 'primary', 'success', 'warning', 'info', 'danger' ], // 与前端 @icedesign/label 的 type 保持一致
    },
  }, {
    timestamps: true, // 将自动添加 createAt 和 updateAt 两个字段
  });

  return mongoose.model('Tag', TagSchema);
};
