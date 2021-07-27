const LinkedList = require('./LinkedList')

const list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);
list.insert(7);
list.insert(8);
list.insert(9);
list.insert(10);


console.log(JSON.stringify(list, null, 2));

