'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { app } = ctx;
    const reqBody = ctx.request.body;
    if (reqBody && reqBody.name && reqBody.password) {
      // const userInfo = await ctx.model.User.findOne({ name: reqBody.name, password: reqBody.password });
      const userInfo = await ctx.model.User.findOne({ name: reqBody.name, password: reqBody.password });
      if (userInfo) {
        const userToken = userInfo.toJSON(); // 去掉 mongoose 中的方法，使 jwt 能注册进去
        const token = app.jwt.sign(userToken, this.config.jwt.secret, { expiresIn: '1d' }); // token签名 有效期为1小时
        ctx.body = {
          message: '获取token成功',
          code: 1,
          token,
        };
      } else {
        ctx.throw(401, '用户名或密码不正确');
      }
    } else {
      ctx.throw(400, '参数错误');
    }
  }
  async create() {
    const { ctx } = this;
    const { name } = ctx.request.body;
    const repeatedUser = await ctx.model.User.findOne({ name });
    if (repeatedUser) ctx.throw(409, '用户已经存在');
    const user = await new ctx.model.User(ctx.request.body).save();
    ctx.body = user;
  }
  async getUserList() {
    const { ctx } = this;
    const userList = await ctx.service.list.find({ model: 'User' });
    ctx.body = userList;
  }
  async getUserInfo() {
    const { ctx } = this;
    const userId = ctx.params.id;
    const userInfo = await ctx.model.User.findById(userId);
    ctx.body = userInfo;
  }
  async delete() {
    const { ctx } = this;
    const user = await ctx.model.User.findByIdAndRemove(ctx.params.id);
    ctx.status = user ? 204 : 404;
  }
}

module.exports = UserController;
