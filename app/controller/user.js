'use strict';

const path = require('path');
const fs = require('fs');
const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    const { app } = ctx;
    const reqBody = ctx.request.body;
    if (reqBody && reqBody.name && reqBody.password) {
      const userInfo = await ctx.model.User.findOne({ name: reqBody.name, password: reqBody.password });
      if (userInfo) {
        if (ctx.headers['x-auth-view'] === 'admin') { // 说明登录的是管理视图，需要验证角色是管理员
          if (userInfo.role !== 'admin') {
            ctx.throw(401, '权限不足，请使用管理员账号进行登录');
          }
        }
        const userToken = userInfo.toJSON(); // 去掉 mongoose 中的方法，使 jwt 能注册进去
        const expiresIn = reqBody.remember ? '3d' : '1d';
        const token = app.jwt.sign(userToken, this.config.jwt.secret, { expiresIn }); // token 签名有效期
        ctx.session.userInfo = userInfo;
        ctx.session.userId = userInfo._id;
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
    const userList = await ctx.service.common.list({ model: 'User' });
    ctx.body = userList;
  }
  async getUserInfo() {
    const { ctx } = this;
    const userId = ctx.params.id;
    const userInfo = await ctx.model.User.findById(userId);
    ctx.body = userInfo;
  }
  async update() {
    const { ctx } = this;
    const userId = ctx.params.id;
    const user = await ctx.model.User.update({ _id: userId }, { $set: ctx.request.body });
    ctx.body = user;
  }
  async delete() {
    const { ctx } = this;
    const user = await ctx.model.User.findByIdAndRemove(ctx.params.id);
    if (user.avatar) {
      const uploadPath = user.avatar.split('/public/')[1];
      const filePath = path.resolve(__dirname, `../public/${uploadPath}`);
      const existFile = fs.existsSync(filePath);
      if (existFile) {
        fs.unlinkSync(filePath);
      }
    }
    ctx.status = user ? 204 : 404;
  }
  async upload() {
    const { ctx } = this;
    const url = await ctx.service.common.upload('users');
    await ctx.model.User.update({ _id: ctx.session.userId }, { $set: { avatar: url } });
    this.ctx.body = {
      success: true,
      url,
    };
  }
}

module.exports = UserController;
