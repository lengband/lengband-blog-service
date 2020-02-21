'use strict';
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const Controller = require('egg').Controller;
const debug = require('debug')('next:home');

const appendFile = promisify(fs.appendFile);
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async upload() {
    const { ctx } = this;
    const { baseDir } = ctx.app;
    const stream = await ctx.getFileStream();
    const name = path.basename(stream.filename);
    const time = Date.now();
    debug('name: %s', name);
    const filePath = path.join(baseDir, '/app/public/uploads', `/${time}-${name}`);
    try {
      await new Promise((resolve, reject) => {
        stream.on('data', data => appendFile(filePath, data));
        stream.on('end', () => resolve());
        stream.on('error', error => reject(error));
      });
      const url = `${ctx.origin}/public/uploads/${time}-${name}`;
      await ctx.model.User.update({ _id: ctx.session.userId }, { $set: { avatar: url } });
      this.ctx.body = {
        success: true,
        url,
      };
    } catch (error) {
      this.ctx.body = {
        success: false,
      };
    }
  }
}

module.exports = HomeController;
