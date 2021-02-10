const AuthGoogleSheet = require("../util/auth-google-sheet");
var _ = require("lodash");

module.exports = GetDataGoogleSheet = async (sheet_id) => {
  let data;
  try {
    data = await AuthGoogleSheet().spreadsheets.get({
      spreadsheetId: sheet_id,
    });

    //set format data
    _.unset(data);
    const spreadsheetId = _.get(data, "data.spreadsheetId");
    const title = _.get(data, "data.properties.title");
    const sheets = data.data.sheets;
    const arr_sheet = _.map(sheets, (d) => {
      return _.get(d, "properties.title");
    });
    //----->

    const gsheet = [
      {
        spreadsheetId: spreadsheetId,
        sheetName: title,
        projectName: arr_sheet,
      },
    ];
    data = gsheet;
  } catch (error) {
    data = error;
  }
  console.log(data);
  return data;
};
