const assert = require('assert')
const LinkedList = require('./LinkedList')
let list = new LinkedList();

describe('basic tests', function () {

    function init() {
        list = new LinkedList();

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

    }
    function removeRandomElements(list) {
        //console.log(JSON.stringify(list, null, 2));
        const it = Math.floor(Math.random() * list.length) + 1
        const elements = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        for (let i = 0; i < it; i++) {
            const index = Math.floor(Math.random() * elements.length) + 1
            const element = elements[index]
            list.remove(element)
            elements.splice(index, 1)
        }
        let head = list.head
        let previous = null
        let i = 1
        while (head && head.next != null) {
            if (head.data != elements[i] || head.previous != elements[i - 1])
                return false

            if (head.next == null) {
                if (head.data != list.tail.data || head.previous == list.tail.previous)
                    return false
                break
            }
            i++
            previous = head
            head = head.next
        }
        return true
    }
    function addElements(list) {

    }
    it('insertion', () => {
        init()

    })
    it('removals', function () {
        init()
        assert.strictEqual(removeRandomElements(list), true)
        init()
        assert.strictEqual(removeRandomElements(list), true)
        init()
        assert.strictEqual(removeRandomElements(list), true)


    })
})