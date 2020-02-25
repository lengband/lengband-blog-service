// 仅管理员可以操作的一些接口
'use strict';

module.exports = () => {
  return async function adminauth(ctx, next) {
    const { userInfo } = ctx.session;
    const userId = userInfo._id;
    const userMsg = await ctx.model.User.findById(userId);
    if (userMsg && userMsg.role === 'admin') {
      await next();
    } else {
      ctx.throw(401, '权限不足，仅管理员可操作');
    }
  };
};
