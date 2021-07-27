class LinkedListNode {
    /**
     * @constructor
     * @description constructs a new node with an initial piece of data. Next node is null
     * @param {Number} data - data of the new node
     */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

module.exports = LinkedListNode;