/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1580631851355_4802';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ '*' ],
  };

  config.bodyParser = {
    enable: true,
    encoding: 'utf8',
    formLimit: '10mb',
    jsonLimit: '1mb',
    textLimit: '1mb',
    strict: true,
    // @see https://github.com/hapijs/qs/blob/master/lib/parse.js#L8 for more options
    queryString: {
      arrayLimit: 100,
      depth: 5,
      parameterLimit: 1000,
    },
    onerror(err) {
      err.message += ', check bodyParser config';
      throw err;
    },
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/lengband_blog',
      options: {},
      // mongoose global plugins, expected a function or an array of function and options
      // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
    },
  };

  // 在前端项目里面登录的跳转地址改成 /passport/github
  config.passportGithub = {
    key: 'fe936539c82c1fe37d03',
    secret: 'ee3773e7cb0c84e2cb96134f95b379d48e6f3d8c',
    callbackURL: '/passport/github/callback',
    proxy: false,
  };

  config.cors = {
    origin: app => app.request.header.origin, // 想要在 credentials 的情况下实现 * 的效果，要动态获取 origin
    // origin: 'http://localhost:3001',
    // origin: '*', // 浏览器端 withCredentials: true 的情况下不能设置为*
    credentials: true, // 允许携带cookies
    allowMethods: 'GET,HEAD,POST,PUT,DELETE,PATCH,OPTIONS',
  };

  config.jwt = {
    secret: 'lengband',
  };

  return {
    ...config,
    ...userConfig,
  };
};
