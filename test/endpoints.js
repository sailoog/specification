var chai = require('chai');
chai.Should();
chai.use(require('../index.js').chaiModule);

describe('Endpoint Discovery', function() {
  it("should be valid", function() {
    require('./data/endpoints.json').should.be.validDiscovery;
  });
});
