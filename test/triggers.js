require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('triggers', () => {

  var authData = { apiKey: "demo" };

  it('should autthenticate with valid auth', (done) => {
    const bundle = {
      authData: authData
    };

    appTester(App.authentication.test, bundle)
      .then(results => {
        results.status.should.equal(200);
        done();
      })
      .catch(done);
  });


});
