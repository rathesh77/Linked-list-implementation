const LinkedListNode = require("./LinkedListNode")

class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    insert(data) {
        const node = new LinkedListNode(data)
        if (!this.head) {
            this.head = node
            this.tail = node
            this.tail.previous = null
        } else {
            this.tail.next = node
            this.tail.next.previous = this.tail.data
            this.tail = node
        }
        this.length++
    }

    remove(data) {
        if (this.head.data == data) {
            if (this.head.next == null)
                this.tail = this.head = null
            else {
                this.head = this.head.next
                this.head.previous = null
            }
            this.length--
            return
        }
        let nextNode = this.head.next, prevNode = this.head
        do {
            if (nextNode.data == data) {
                this.length--
                if (nextNode.next == null) {
                    prevNode.next = null
                    this.tail.data = prevNode.data
                    this.tail.previous = prevNode.previous
                } else {
                    nextNode.data = nextNode.next.data
                    nextNode.next = nextNode.next.next
                    if (nextNode.next == null) {
                        this.tail.previous = nextNode.previous
                    }
                }
                break
            }
            prevNode = nextNode
            nextNode = nextNode.next
        } while (nextNode != null)
    }

}

module.exports = LinkedList