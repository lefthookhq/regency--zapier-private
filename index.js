const recipe = require('./triggers/blog_post');
const authentication = require('./auth.js');


const includeCredentialsInHeader = (request, z, bundle) => {
  
    request.params = request.params || {};
    request.params.hapikey = bundle.authData.apiKey;
  
  return request;
};

const App = {

  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  
  authentication: authentication,

  beforeRequest: [
    includeCredentialsInHeader
  ],

  afterResponse: [
  ],

  resources: {
  },

  triggers: {
    [recipe.key]: recipe
  },

  searches: {
  },

  creates: {
  }
};

module.exports = App;
