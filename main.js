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


list.remove(5)
list.remove(8)
list.remove(2)

list.remove(9)
list.remove(1)
list.remove(3)

list.remove(7)

list.remove(4)
//list.remove(6)
//list.remove(10)
list.insert(26);
list.insert(1);
list.insert(2);
list.insert(3);


console.log(JSON.stringify(list, null, 2));

