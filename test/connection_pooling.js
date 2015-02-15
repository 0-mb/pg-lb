var assert = require("assert");

describe("Connection Pooling", function() {

  before(function () {
    // setup databases
    
  });  

  it('should connect to a single pg', function( done ){
    require('./apps/single_connection')(
      'postgres://postgres:puglub@coreos:9432/postgres',
      function(app){
        assert.typeOf(app.output, 'array');
        assert.lengthOf(app.output, 1);
        assert.property(app.output[0], 'result');
        assert.propertyVal(app.output[0], 'result', 1);
        done();
      }
    );
  });
});