class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.length > 0) {
            const firstOut = this.first.value;
            const lastPart = this.first.next;
            this.first = lastPart;
            this.length--;
            return firstOut;
        }
        throw new Error('No elements in the queue')
    }

    peek() {
        return this.first;
    }
}

module.exports = Queue;