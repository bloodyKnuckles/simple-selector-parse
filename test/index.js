var sp = require('../');
var test = require('tape');

test('selector parse', function (tt) {

	tt.deepEqual(sp('span'), {tag: 'span'}, 'element only');
	tt.deepEqual(sp('a#id1'), {tag: 'a', id: 'id1'}, 'single id');
	tt.deepEqual(sp('span#id1#id2'), {tag: 'span', id: 'id2'}, 'two ids');
	tt.deepEqual(sp('span.classA'), {tag: 'span', classes: ['classA']}, 'single cass');
	tt.deepEqual(sp('span.classA.classB'), {tag: 'span', classes: ['classA', 'classB']}, 'two classes');
	tt.deepEqual(sp('span#id1.classA.classB'), {tag: 'span', id: 'id1', classes: ['classA', 'classB']}, 'single id, two classes');
	tt.deepEqual(sp('span#id1#id2.classA.classB'), {tag: 'span', id: 'id2', classes: ['classA', 'classB']}, 'two ids, two classes (1)');
	tt.deepEqual(sp('span#id1.classA#id2.classB'), {tag: 'span', id: 'id2', classes: ['classA', 'classB']}, 'two ids, two classes (2)');
	tt.deepEqual(sp('span.classA#id1.classB#id2.classC.classD'), {tag: 'span', id: 'id2', classes: ['classA', 'classB', 'classC', 'classD']}, 'two ids, multiple classes');

	tt.end();
});

test('element not specified', function (tt) {
	tt.deepEqual(sp(''), {tag: 'div'}, 'empty string');
	tt.deepEqual(sp(), {tag: 'div'}, 'no arguments');
	tt.deepEqual(sp('#id1'), {tag: 'div', id: 'id1'}, 'single id');
	tt.deepEqual(sp('#id1#id2'), {tag: 'div', id: 'id2'}, 'two ids');
	tt.deepEqual(sp('.classA'), {tag: 'div', classes: ['classA']}, 'single cass');
	tt.deepEqual(sp('.classA.classB'), {tag: 'div', classes: ['classA', 'classB']}, 'two classes');
	tt.deepEqual(sp('#id1.classA.classB'), {tag: 'div', id: 'id1', classes: ['classA', 'classB']}, 'single id, two classes');
	tt.deepEqual(sp('#id1#id2.classA.classB'), {tag: 'div', id: 'id2', classes: ['classA', 'classB']}, 'two ids, two classes (1)');
	tt.deepEqual(sp('#id1.classA#id2.classB'), {tag: 'div', id: 'id2', classes: ['classA', 'classB']}, 'two ids, two classes (2)');
	tt.deepEqual(sp('.classA#id1.classB#id2.classC.classD'), {tag: 'div', id: 'id2', classes: ['classA', 'classB', 'classC', 'classD']}, 'two ids, multiple classes');

	tt.end();
});

