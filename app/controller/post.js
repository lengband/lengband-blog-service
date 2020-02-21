'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async create() {
    const { ctx } = this;
    const { name, type, tags } = ctx.request.body;
    const repeatedPost = await ctx.model.Post.findOne({ name });
    const isValidType = this.app.mongoose.Types.ObjectId.isValid(type);
    if (repeatedPost) ctx.throw(409, '文章已经存在');
    if (!type) ctx.throw(404, '请填写文章类别');
    if (!isValidType) ctx.throw(400, '文章类别id不合法');
    const post = await new ctx.model.Post(ctx.request.body).save();
    // type post_num +1
    await ctx.model.Type.update({ _id: type }, { $inc: { post_num: 1 } });
    // tag post_num +1
    await ctx.model.Tag.updateMany({ _id: { $in: tags } }, { $inc: { post_num: 1 } });
    ctx.body = post;
  }
  async getPostList() {
    const { ctx } = this;
    const postList = await ctx.service.list.find({ model: 'Post', extParams: ctx.query, populate: 'type tags' });
    ctx.body = postList;
  }
  async getPostInfo() {
    const { ctx } = this;
    const postId = ctx.params.id;
    const postInfo = await ctx.model.Post.findById(postId).populate('type tag');
    ctx.body = postInfo;
  }
  async delete() {
    const { ctx } = this;
    try {
      const post = await ctx.model.Post.findByIdAndRemove(ctx.params.id);
      // type post_num -1（在 post_num 大于 0 时才执行）
      await ctx.model.Type.update({ _id: post.type, post_num: { $gt: 0 } }, { $inc: { post_num: -1 } });
      // tag post_num -1（在 post_num 大于 0 时才执行）
      await ctx.model.Tag.updateMany({ _id: { $in: post.tags }, post_num: { $gt: 0 } }, { $inc: { post_num: -1 } });
      ctx.status = post ? 204 : 404;
    } catch (error) {
      throw error;
    }
  }
  async update() {
    const { ctx } = this;
    const postId = ctx.params.id;
    const post = await ctx.model.Post.update({ _id: postId }, { $set: ctx.request.body });
    ctx.body = post;
  }
}

module.exports = PostController;
