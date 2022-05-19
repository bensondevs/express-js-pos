'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
  db.createTable('users', {
    id: { type: 'bigint', primaryKey: true, autoIncrement: true },
    name: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' },
    created_at: { type: 'datetime' },
    updated_at: { type: 'datetime' },
  });
};

exports.down = function (db) {
  return null;
};

exports._meta = {
  "version": 1
};
