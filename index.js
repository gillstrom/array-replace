'use strict';
module.exports = function (arr, search, replace) {
	var ret = [];

	if (!Array.isArray(arr)) {
		throw new TypeError('Expected an array');
	}

	arr.forEach(function (el) {
		ret.push(el.replace(search, replace));
	});

	return ret;
};
