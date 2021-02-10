// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    // console.log(context)
    const { url } = context.data;
    //get spreadsheetId which locate between "/d/" and "/edit"
    var hasEdit = url.includes("/edit", 12);
    if (hasEdit) {
      var spreadsheetId = url.substring(
        url.lastIndexOf("/d/") + 3,
        url.lastIndexOf("/edit")
      );
    }
    else {
      var spreadsheetId = url.substring(
        url.lastIndexOf("/d/") + 3);
    }
    console.log(spreadsheetId);
    context.data = {
      ...context.data,
      "spreadsheetId": spreadsheetId
    }
    // console.log(context)

    return context;
  };
};
