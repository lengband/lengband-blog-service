'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async create() {
    const { ctx } = this;
    const { name, type } = ctx.request.body;
    const repeatedArticle = await ctx.model.Article.findOne({ name });
    const isValidType = this.app.mongoose.Types.ObjectId.isValid(type);
    if (repeatedArticle) ctx.throw(409, '文章已经存在');
    if (!type) ctx.throw(404, '请填写文章类别');
    if (!isValidType) ctx.throw(400, '文章类别id不合法');
    const article = await new ctx.model.Article(ctx.request.body).save();
    ctx.body = article;
  }
  async getArticleList() {
    const { ctx } = this;
    const articleList = await ctx.service.list.find({ model: 'Article', populate: 'type tags' });
    ctx.body = articleList;
  }
  async getArticleInfo() {
    const { ctx } = this;
    const articleId = ctx.params.id;
    const articleInfo = await ctx.model.Article.findById(articleId).populate('type tag');
    ctx.body = articleInfo;
  }
  async delete() {
    const { ctx } = this;
    try {
      const article = await ctx.model.Article.findOneAndDelete(ctx.params.id);
      ctx.status = article ? 204 : 404;
    } catch (error) {
      throw error;
    }
  }
  async update() {
    const { ctx } = this;
    const articleId = ctx.params.id;
    const article = await ctx.model.Article.update({ _id: articleId }, { $set: ctx.request.body });
    ctx.body = article;
  }
}

module.exports = ArticleController;
