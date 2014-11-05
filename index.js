'use strict';

module.exports = function* reduce(array, reducer, init) {
  for(var i in array) {
    init = yield* reducer(init, array[i], i, array);
  }
  return init;
};
