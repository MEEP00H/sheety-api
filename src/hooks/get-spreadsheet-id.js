// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
// module.exports = (options = {}) => {
//   return async context => {
//     //       console.log(context)
//     const { spreadsheetId } = context.data;
// //get spreadsheetId which locate between "/d/" and "/edit"
//   var spreadsheetId = url.substring( 
//     url.lastIndexOf("/d/")+3, 
//     url.lastIndexOf("/edit"));
//   console.log(spreadsheetId);
//   context.data = {
//     ...context.data,
//     "spreadsheetId":spreadsheetId
//  }





const { BadRequest } = require("@feathersjs/errors");
const DataGoogleSheet = require("../util/data-google-sheet");
module.exports = (options = {}) => {
  return async context => {
    const { spreadsheetId } = context.data;
    // console.log(spreadsheetId);
    const gsheet = await DataGoogleSheet(spreadsheetId);
    if (!gsheet) {
      throw new BadRequest("spreadsheetId invalid!")
    }
    // console.log(data);
  };
};




