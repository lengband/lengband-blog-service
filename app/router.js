'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 挂载鉴权路由
  // app.passport.mount('github');
  // 首页
  router.get('/', controller.home.index);
  // 用户
  router.get('/api/user', controller.user.getUserList);
  router.get('/api/user/:id', controller.user.getUserInfo);
  router.post('/api/user/create', app.jwt, controller.user.create);
  router.delete('/api/user/:id', app.jwt, controller.user.delete);
  router.post('/api/login', controller.user.login); // 登录校验
  router.patch('/api/user/:id', app.jwt, controller.user.update);
  // 文章类别
  router.get('/api/type', controller.type.getTypeList);
  router.post('/api/type/create', app.jwt, controller.type.create);
  router.delete('/api/type/:id', app.jwt, controller.type.delete);
  router.patch('/api/type/:id', app.jwt, controller.type.update);
  // 文章
  router.get('/api/post', controller.post.getPostList);
  router.get('/api/post/:id', controller.post.getPostInfo);
  router.post('/api/post/create', app.jwt, controller.post.create);
  router.delete('/api/post/:id', app.jwt, controller.post.delete);
  router.patch('/api/post/:id', app.jwt, controller.post.update);
  // 文章标签
  router.get('/api/tag', controller.tag.getTagList);
  router.post('/api/tag/create', app.jwt, controller.tag.create);
  router.delete('/api/tag/:id', app.jwt, controller.tag.delete);
  router.patch('/api/tag/:id', app.jwt, controller.tag.update);
};
