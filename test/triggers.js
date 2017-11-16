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
  
  
   it('should get blog_posts sorted by updated', (done) => {
    const bundle = {
      authData: authData
    };

    appTester(App.triggers.blog_post.operation.perform, bundle)
      .then(results => {
        results.length.should.be.above(0);
        var one = results[0].updated;
        var two = results[1].updated;
        
        var diff = (one - two);
        diff.should.be.above(0);
        done();
      })
      .catch(done);
  });


});
