# array-replace [![Build Status](https://travis-ci.org/gillstrom/array-replace.svg?branch=master)](https://travis-ci.org/gillstrom/array-replace)

> Replace array values with [String.prototype.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)


## Install

```
$ npm install --save array-replace
```


## Usage

```js
const arrayReplace = require('array-replace');
const arr = [
	'foo',
	'bar'
];

arrayReplace(arr, 'fo', 'y');
//=> ['yo', 'bar']

arrayReplace(arr, 'fo', str => str.toUpperCase());
//=> ['FOo', 'bar']
```


## API

### arrayReplace(input, search, replace)

Returns a new array.

#### input

*Required*  
Type: `array`

The array to replace values in.

#### search

*Required*  
Type: `string` or `regexp`

Search for matching substring that will be replaced.

#### replace

*Required*  
Type: `string` or `function`

Replacing the matching substring.


## Related

* [key-replace](https://github.com/gillstrom/key-replace) - Replace object keys with `String.prototype.replace`
* [value-replace](https://github.com/gillstrom/value-replace) - Replace object values with `String.prototype.replace`


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
