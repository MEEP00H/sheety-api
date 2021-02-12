// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async (context) => {
    // console.log(context);
    const { _id: ownerId } = context.params.users;
    context.data = {
      ...context.data,
      owner: ownerId,
    };
    // console.log(context);
    return context;
  };
};
