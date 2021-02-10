// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    // console.log(context);
    const { _id } = context.params.users;
    // get spreadsheetId which locate between "/d/" and "/edit"
    context.data = {
      ...context.data,
      owner: { _id },
    };
    console.log(context);
    return context;
  };
};
