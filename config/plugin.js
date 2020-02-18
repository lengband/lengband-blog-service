'use strict';

/** @type Egg.EggPlugin */
exports.static = {
  enable: true,
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.passport = {
  enable: true,
  package: 'egg-passport',
};

exports.passportGithub = {
  enable: true,
  package: 'egg-passport-github',
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};
