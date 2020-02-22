// 仅管理员可以操作的一些接口
'use strict';

module.exports = () => {
  return async function adminauth(ctx, next) {
    const { userInfo } = ctx.session;
    if (userInfo && userInfo.role === 'admin') {
      await next();
    } else {
      ctx.throw(401, '权限不足，仅管理员可操作');
    }
  };
};
