'use strict';

const Controller = require('egg').Controller;

class CommentController extends Controller {
  async getCommentInfo() {
    const { ctx } = this;
    const typeId = ctx.params.id;
    const typeInfo = await this.ctx.model.Comment.findById(typeId);
    ctx.body = typeInfo;
  }
  async getCommentList() {
    const { ctx } = this;
    const typeList = await ctx.service.list.find({ model: 'Comment' });
    ctx.body = typeList;
  }
  async create() {
    const { ctx } = this;
    const type = await new ctx.model.Comment(ctx.request.body).save();
    ctx.body = type;
  }
  async update() {
    const { ctx } = this;
    const typeId = ctx.params.id;
    const type = await ctx.model.Comment.update({ _id: typeId }, { $set: ctx.request.body });
    ctx.body = type;
  }
  async delete() {
    const { ctx } = this;
    const type = await ctx.model.Comment.findByIdAndRemove(ctx.params.id);
    ctx.status = type ? 204 : 404;
  }
}

module.exports = CommentController;
