import test from 'ava';
import fn from './';

const arr = [
	'foo',
	'bar',
	'baz',
	'qux'
];

test('string', t => {
	const expected = [
		'foo',
		'r',
		'z',
		'qux'
	];

	t.same(fn(arr, 'ba', ''), expected);
});

test('regexp', t => {
	const expected = [
		'foo',
		'yor',
		'yoz',
		'qux'
	];

	t.same(fn(arr, /ba/, 'yo'), expected);
});

test('function', t => {
	const expected = [
		'foo',
		'BAr',
		'BAz',
		'qux'
	];

	t.same(fn(arr, 'ba', str => str.toUpperCase()), expected);
});
