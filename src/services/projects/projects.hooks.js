const { authenticate } = require('@feathersjs/authentication').hooks;
const getProjectOwner = require('../../hooks/get-project-owner');
const { BadRequest } = require("@feathersjs/errors");
const DataGoogleSheet = require("../../util/data-google-sheet");
const _ = require("lodash");

const check_Spreadsheed_Id =  () =>  async  context => {
    const { spreadsheetId } = context.data;
    const gsheet = await DataGoogleSheet(spreadsheetId);
    // // console.log(context);
    console.log("G-SHEET");
    console.log(gsheet);
    if (!_.has(context.result, "message")) {

      };
  };

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