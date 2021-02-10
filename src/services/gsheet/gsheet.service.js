// Initializes the `gsheet` service on path `/gsheet`
const { Gsheet } = require('./gsheet.class');
const hooks = require('./gsheet.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/gsheet', new Gsheet(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('gsheet');

  service.hooks(hooks);
};
