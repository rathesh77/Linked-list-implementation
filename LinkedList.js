const LinkedListNode = require("./LinkedListNode")

class LinkedList {

    /**
     * @constructor
     * @description constructs a new list with head and tail initialized to null. length is 0
     */
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    /**
    * 
    * @param {Number} data 
    * @returns null
    * @description appends the list a new item
    */
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

    /**
     * 
     * @param {Number} data 
     * @param {LinkedListNode} head
     * @returns null
     * @description removes an item from the list
     */
    remove(data, head) {
        // si la liste est vide ou on ne fournit pas de donnée, on arrête
        if (this.head == null || data == null)
            return
        if (head == null)
            head = this.head

        if (head.data == data) {
            this.length--
            // si on a trouvé la valeur
            //  on doit verifier 
            //      si on va supprimer le dernier element
            //      si on va supprimer l'avant dernier element
            //      si on supprime un element quelconque
            if (head.next != null) {
                // si on ne supprime pas le dernier element
                head.data = head.next.data
                if (head.next.next != null) {
                    // si on ne supprime pas l'avant dernier
                    head.next = head.next.next
                } else {
                    head.next = null
                    this.tail = head
                }
            }
            else if (head.previous == null) {
                this.head = this.tail = null
            }
        }
        else if (head.next != null) {
            // si le prochain element n'est pas NULL
            // sinon on appel remove(data, head.next)
            if (head.next.next == null && head.next.data == data) {
                this.tail = head
                head.next = null
                this.length--
            }
            else {
                this.remove(data, head.next)
            }
        }
    }

    /* NON-RECURSIVE VERSION OF REMOVE METHOD
    remove(data) {
        if (this.head == null || data == null)
            return
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
                    this.tail = prevNode
                    this.tail.next = null
                } else {
                    nextNode.data = nextNode.next.data
                    if (nextNode.next.next == null) {
                        this.tail = nextNode
                        nextNode.next = null
                    }
                    else {
                        nextNode.next = nextNode.next.next
                    }
                }
                break
            }
            prevNode = nextNode
            nextNode = nextNode.next
        } while (nextNode != null)
    }*/

}

module.exports = LinkedList
