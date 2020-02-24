'use strict';

const Controller = require('egg').Controller;

class TypeController extends Controller {
  async getTypeInfo() {
    const { ctx } = this;
    const typeId = ctx.params.id;
    const typeInfo = await this.ctx.model.Type.findById(typeId);
    ctx.body = typeInfo;
  }
  async getTypeList() {
    const { ctx } = this;
    const typeList = await ctx.service.common.list({ model: 'Type' });
    ctx.body = typeList;
  }
  async create() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    const repeatedType = await ctx.model.Type.findOne({ name });
    if (repeatedType) ctx.throw(409, '文章类型已经存在');
    const type = await new ctx.model.Type(ctx.request.body).save();
    ctx.body = type;
  }
  async update() {
    const { ctx } = this;
    const typeId = ctx.params.id;
    const type = await ctx.model.Type.update({ _id: typeId }, { $set: ctx.request.body });
    ctx.body = type;
  }
  async delete() {
    const { ctx } = this;
    const type = await ctx.model.Type.findByIdAndRemove(ctx.params.id);
    ctx.status = type ? 204 : 404;
  }
}

module.exports = TypeController;
