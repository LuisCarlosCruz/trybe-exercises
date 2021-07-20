const assert = require('assert');

const greet = (user,greet = 'Hi') => `${greet} ${user}`;
// console.log(greet('luis'));

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');