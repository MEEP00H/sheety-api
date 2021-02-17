const AuthGoogleSheet = require("../util/auth-google-sheet");
const _ = require("lodash");

module.exports = GetDataGoogleSheet = async (sheet_id) => {
  try {
    return await AuthGoogleSheet().spreadsheets.get({
      spreadsheetId: sheet_id,
    });
  } catch (error) {
    return {
      message: "error",
      status: error.response.status,
      statusText: error.response.statusText,
    };
  }
};
