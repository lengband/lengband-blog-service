'use strict';
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const debug = require('debug')('next:common-service-debug:');
const Service = require('egg').Service;

const appendFile = promisify(fs.appendFile);

class ListService extends Service {
  async list({ model, extParams = {}, populate = '', search, limit = 20, offset = 0 }) {
    const params = extParams;
    if (search) {
      params.name = new RegExp(search);
    }
    const total = await this.ctx.model[model].countDocuments({});
    const data = await this.ctx.model[model]
      .find(params)
      .limit(+limit)
      .skip(limit * offset)
      .populate(populate);
    return {
      data,
      offset,
      limit,
      total,
    };
  }
  async upload(dirpath) {
    const { ctx } = this;
    const { baseDir } = ctx.app;
    const stream = await ctx.getFileStream();
    const name = path.basename(stream.filename);
    const time = Date.now();
    debug('name: %s', name);
    const uploadDir = `/app/public/uploads/${dirpath}`;
    const isExistUploadDir = fs.existsSync(path.join(baseDir, uploadDir));
    if (!isExistUploadDir) {
      fs.mkdirSync(path.join(baseDir, uploadDir));
    }
    const filePath = path.join(baseDir, uploadDir, `/${time}-${name}`);
    try {
      await new Promise((resolve, reject) => {
        stream.on('data', data => appendFile(filePath, data));
        stream.on('end', () => resolve());
        stream.on('error', error => reject(error));
      });
      const url = `${ctx.origin}/public/uploads/${dirpath}/${time}-${name}`;
      return url;
    } catch (error) {
      this.ctx.body = {
        success: false,
      };
    }
  }
}

module.exports = ListService;
