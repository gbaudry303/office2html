var should = require('chai').should(),
    office2html = require('../index'),
    generateHtml = office2html.generateHtml;

describe('generateHtml methods of module', function() {
  this.timeout(60000);
  it('generate html from a office doc', function(done) {
    generateHtml('test/test.pptx', function(err, result) {
      console.log(result);
      result.should.equal('HTML of test/test.pptx has been successfully generated.');
      return done();
   });
  });
});