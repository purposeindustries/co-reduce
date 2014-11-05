# co-reduce [![Build Status](https://travis-ci.org/purposeindustries/co-reduce.svg)](https://travis-ci.org/purposeindustries/co-reduce)

Reduce an array (or object), using generators.

## Install

Install the [package](http://npmjs.org/package/co-reduce) with [`npm`](http://npmjs.org):

```sh
$ npm install co-reduce
```

## Usage

### `reduce(array, fn, init)`

```js
co(function* () {
  var sum = yield* reduce([1, 2, 3, 4], function* (s, n) {
    return yield* asyncAdd(s, n);
  }, 0);
  console.log(sum);
});
```

## License

MIT
