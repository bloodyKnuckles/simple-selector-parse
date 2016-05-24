# simple-selector-parse

### install
`npm install simple-selector-parse`

### use

```js
var sp = require('simple-selector-parse');

var selector = sp('span#id1.classA.classB);
console.log(selector.tag); // span
console.log(selector.id); // id1
console.log(selector.classes); // ['classA', 'classB']
console.log(selector.classes.join(' ')); // classA classB

console.log(sp('span#id1'));
// {tag: 'span', id: 'id1'}

console.log(sp('span.classA'));
// {tag: 'span', classes: ['classA']}

console.log(sp('span#id1.classA.classB'));
// {tag: 'span', id: 'id1', classes: ['classA', 'classB']}

console.log(sp('span.classA.classB#id1'));
// {tag: 'span', id: 'id1', classes: ['classA', 'classB']}

console.log(sp('span.classA.classB#id1.classC'));
// {tag: 'span', id: 'id1', classes: ['classA', 'classB', 'classC']}
```

### license

MIT
