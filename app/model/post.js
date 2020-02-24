'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const PostSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    introduce: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    author: { // 作者
      type: String,
      default: 'lengband', // 如果作者不是 lengband 表明是转载不是原创
    },
    author_url: {
      type: String,
      default: '', // 如果作者不是 lengband 表明是转载不是原创
    },
    cover: { // 文章封面
      type: String,
    },
    view_count: { // 头像
      type: Number,
      default: 0,
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: 'Type',
    },
    released: { // 是否发布了文章
      type: Boolean,
      default: false,
    },
    tags: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
      required: true,
    },
  }, {
    timestamps: true, // 将自动添加 createAt 和 updateAt 两个字段
  });

  return mongoose.model('Post', PostSchema);
};
