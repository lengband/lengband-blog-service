'use strict';

const Controller = require('egg').Controller;

class TagController extends Controller {
  async getTagInfo() {
    const { ctx } = this;
    const tagId = ctx.params.id;
    const tagInfo = await this.ctx.model.Tag.findById(tagId);
    ctx.body = tagInfo;
  }
  async getTagList() {
    const { ctx } = this;
    const tagList = await ctx.service.common.list({ model: 'Tag' });
    ctx.body = tagList;
  }
  async create() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    const repeatedTag = await ctx.model.Tag.findOne({ name });
    if (repeatedTag) ctx.throw(409, '文章类型已经存在');
    const tag = await new ctx.model.Tag(ctx.request.body).save();
    ctx.body = tag;
  }
  async update() {
    const { ctx } = this;
    const tagId = ctx.params.id;
    const tag = await ctx.model.Tag.update({ _id: tagId }, { $set: ctx.request.body });
    ctx.body = tag;
  }
  async delete() {
    const { ctx } = this;
    const tag = await ctx.model.Tag.findByIdAndRemove(ctx.params.id);
    ctx.status = tag ? 204 : 404;
  }
}

module.exports = TagController;
