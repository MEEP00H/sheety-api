const { authenticate } = require('@feathersjs/authentication').hooks;

const getSpreadsheetId = require('../../hooks/get-spreadsheet-id');

const getProjectOwner = require('../../hooks/get-project-owner');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [ getProjectOwner(),getSpreadsheetId()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
