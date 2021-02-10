// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    //       console.log(context)
    const { spreadsheetId } = context.data;
    // //get spreadsheetId which locate between "/d/" and "/edit"
    //   var spreadsheetId = url.substring( 
    //     url.lastIndexOf("/d/")+3, 
    //     url.lastIndexOf("/edit"));
    //   console.log(spreadsheetId);
    //   context.data = {
    //     ...context.data,
    //     "spreadsheetId":spreadsheetId
    //  }
    var options = {
      method: 'GET',
      url: `http://localhost:3030/gsheet/${spreadsheetId}`,
      headers: {
        'cache-control': 'no-cache',
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': API_KEY,
        'header1': 'header-value-1'
      },
      qs: {
        parameter1: 'parameter-value-1'
      }
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
    });

  };
};




// const check_correct_spreadsheetId = require('../services/gsheet/gsheet.class');
// module.exports = (options = {}) => {
//   return async context => {
//     const {spreadsheetId} = context.data;
//     data = check_correct_spreadsheetId.Gsheet.get(spreadsheetId);
//     if (data === { status: 500 }){
//       return "Error"
//     }
//   };
// };
