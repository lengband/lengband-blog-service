'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CommentSchema = new Schema({
    name: { // 评论内容
      type: String,
      required: true,
    },
    user: { // 评论者
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    post: { // 评论的文章
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
    toUser: { // 回复谁的评论
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    toContent: { // 回复的哪条评论
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      default: '',
    },
    likes: { // 点赞数
      type: Number,
      default: 0,
    },
  }, {
    timestamps: true, // 将自动添加 createAt 和 updateAt 两个字段
  });

  return mongoose.model('Comment', CommentSchema);
};
