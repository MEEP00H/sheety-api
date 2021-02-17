const { BadRequest } = require("@feathersjs/errors");
const DataGoogleSheet = require("../util/data-google-sheet");
const _ = require("lodash");
module.exports = (options = {}) => {
  return async context => {
    const { spreadsheetId } = context.data;
    const gsheet = await DataGoogleSheet(spreadsheetId);
    if (!_.has(context.result, "message")) {
      context.result = {
        spreadsheetId: spreadsheetId,
        title: title,
        sheets: arr_sheets,
      };
    }
    console.log(message);
  };
};




