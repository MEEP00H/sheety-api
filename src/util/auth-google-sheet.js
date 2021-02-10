const { google } = require("googleapis");
const keys = require("../../keys.json");

module.exports = AuthGoogleSheet = (s) => {
  const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ["https://www.googleapis.com/auth/spreadsheets"]
  );
  const gsapi = google.sheets({ version: "v4", auth: client });
  return gsapi;
};
