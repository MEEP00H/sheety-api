/* eslint-disable no-unused-vars */
const { google } = require("googleapis");
const keys = require("../../../keys.json");

exports.Gsheet = class Gsheet {
  constructor(options) {
    this.options = options || {};
  }

  async find(params) {
    return [];
  }

  async get(id, params) {
    const client = new google.auth.JWT(
      keys.client_email,
      null,
      keys.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );
    const gsapi = google.sheets({ version: "v4", auth: client });
    const data = await gsapi.spreadsheets.get({
      spreadsheetId: id,
    });

    return { data };
  }

  async create(data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map((current) => this.create(current, params)));
    }

    return data;
  }

  async update(id, data, params) {
    return data;
  }

  async patch(id, data, params) {
    return data;
  }

  async remove(id, params) {
    return { id };
  }
};
