'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CommentSchema = new Schema({
    name: { // 评论内容
      type: String,
      required: true,
    },
    fromUser: { // 评论者
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    fromArticle: { // 评论的文章
      type: Schema.Types.ObjectId,
      ref: 'Article',
    },
    replyComment: { // 回复的评论
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      default: '',
    },
  }, {
    timestamps: true, // 将自动添加 createAt 和 updateAt 两个字段
  });

  return mongoose.model('Comment', CommentSchema);
};
