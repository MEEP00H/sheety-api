/* eslint-disable no-unused-vars */

const AuthGoogleSheet = require("../../util/auth-google-sheet");
const GetDataGoogleSheet = require("../../util/data-google-sheet");
var _ = require("lodash");

exports.Gsheet = class Gsheet {
  constructor(options) {
    this.options = options || {};
  }

  // async find(params) {
  //   return [];
  // }

  async get(id, params) {
    return GetDataGoogleSheet(id);
  }

  // async create(data, params) {
  //   if (Array.isArray(data)) {
  //     return Promise.all(data.map((current) => this.create(current, params)));
  //   }

  //   return data;
  // }

  // async update(id, data, params) {
  //   return data;
  // }

  // async patch(id, data, params) {
  //   return data;
  // }

  // async remove(id, params) {
  //   return { id };
  // }
};
