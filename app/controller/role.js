'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  async getRoleInfo() {
    const { ctx } = this;
    const roleId = ctx.params.id;
    const roleInfo = await ctx.model.Role.findById(roleId);
    ctx.body = roleInfo;
  }
  async getRoleList() {
    const { ctx } = this;
    const roleList = await ctx.service.list.find({ model: 'Role' });
    ctx.body = roleList;
  }
  async create() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    const repeatedRole = await ctx.model.Role.findOne({ name });
    if (repeatedRole) ctx.throw(409, '角色已经存在');
    const role = await new ctx.model.Role(ctx.request.body).save();
    ctx.body = role;
  }
  async delete() {
    const { ctx } = this;
    const role = await ctx.model.Role.findOneAndDelete(ctx.params.id);
    ctx.status = role ? 204 : 404;
  }
}

module.exports = RoleController;
