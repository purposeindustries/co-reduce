'use strict';

var co = require('co');
var reduce = require('./');

function sleep(ms) {
  return function(cb) {
    setTimeout(cb, ms);
  }
}

describe('co-reduce', function () {
  it('should reduce', function (done) {
    co(function* () {
      var sum = yield* reduce([1,2,3,4], function* (s, n) {
        return s + n;
      }, 0);
      sum.should.eql(10);
    })(done);
  });
  it('should work with co', function(done) {
    co(function* () {
      var sum = yield* reduce([1,2,3,4], function* (s, n) {
        yield sleep(100);
        return s + n;
      }, 0);
      sum.should.eql(10);
    })(done);
  });
  it('should have the same signature as `reduce`', function (done) {
    co(function* () {
      var arr = ['0','1','2'];
      yield* reduce(arr, function* (s, n, i, a) {
        i.should.equal(n);
        a.should.equal(arr);
      });
    })(done);
  });
});
