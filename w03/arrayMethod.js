let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

// filter
const namesB = names.filter(name => name.charAt(0) === 'B');

// map: output is [5, 8, 5, 8, 3].
const namesLength = names.map((name) => name.length);

// reduce:  average string length
names.reduce((total, name) => total + name.length, 0) / names.length;