'use strict';

const Service = require('egg').Service;

class ListService extends Service {
  async find({ model, populate = '', search, limit = 20, offset = 0 }) {
    const params = {};
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
}

module.exports = ListService;
