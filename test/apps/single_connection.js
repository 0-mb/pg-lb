var pg = require('pg');

module.exports = function(conString, done){
  this.output = null;

  var client = new pg.Client(conString);
  client.connect(function(err) {
    if(err) {
      this.output = [{ result : 'could not connect to postgres ' + err }];
      done(this);
      return;
    }
    client.query('SELECT 1 as result', function(err, result) {
      if(err) {
        this.output = [{ result : 'error running query ' + err }];
      }else{
        this.output = result.rows;
      }
      client.end();
      done(this);
    });
  });
};