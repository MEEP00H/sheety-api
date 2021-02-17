const { authenticate } = require('@feathersjs/authentication').hooks;
const getProjectOwner = require('../../hooks/get-project-owner');
const { BadRequest } = require("@feathersjs/errors");
const DataGoogleSheet = require("../../util/data-google-sheet");
const _ = require("lodash");

const check_Spreadsheed_Id =  () =>  async  context => {
    const { spreadsheetId } = context.data;
    const gsheet = await DataGoogleSheet(spreadsheetId);
    // console.log(context);
    console.log("G-SHEET");
    console.log(gsheet);
    if (!_.has(context.result, "message")) {
      context.data = {
        ... context.data,
        "sheets": gsheet.data.sheets
      };
    }
    console.log("context.data.sheets");
    console.log(context.data.sheets);
  };

  const reform_from_google_to_database =  () =>  async  context => {
    context.data = {
       ...context.data,
       "sheets" : context.result.sheets
    }
    console.log(context.data);
  }

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
 // create: [authenticate("jwt"), getProjectOwner(), getSpreadsheetId()],
    create: [check_Spreadsheed_Id()], 
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