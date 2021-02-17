const _ = require("lodash");

const format_data = () => (context) => {
  let data = context.result;
  _.unset(data);
  const spreadsheetId = _.get(data, "data.spreadsheetId");
  const title = _.get(data, "data.properties.title");
  const sheets = _.get(data, "data.sheets");
  let arr_sheets = [];
  _.map(sheets, (d) => {
    arr_sheets.push({ title: _.get(d, "properties").title });
  });

  if (!_.has(context.result, "message")) {
    context.result = {
      spreadsheetId: spreadsheetId,
      title: title,
      sheets: arr_sheets,
    };
  }

  return context;
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [format_data()],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};

