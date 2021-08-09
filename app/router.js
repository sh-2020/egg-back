'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret);
  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/getName', controller.user.getUserByName);
  router.post('/api/user/login', controller.user.login);
  router.get('/api/user/getInfo', _jwt, controller.user.getUserInfo);
  router.post('/api/user/edit', _jwt, controller.user.editUserInfo);
  router.post('/api/user/modify_pass', _jwt, controller.user.editPassword);
  router.post('/api/upload', controller.upload.upload);
  router.post('/api/bill/add', _jwt, controller.bill.add);
  router.get('/api/bill/list', _jwt, controller.bill.list);
  router.post('/api/bill/delete', _jwt, controller.bill.delete);
  router.get('/api/bill/data', _jwt, controller.bill.data);
  router.get('/api/type/list', _jwt, controller.bill.typeList);
  router.get('/api/bill/detail', _jwt, controller.bill.detail);
  router.post('/api/bill/update', _jwt, controller.bill.add);
};
