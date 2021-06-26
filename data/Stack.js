class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.stack = null;
        this.length = 0;
    }

    pop() {
        if (this.length > 0) {
            const firstOut = this.stack.value;
            const last = this.stack.next;
            this.stack = last;
            this.length--;
            return firstOut;
        }
        throw new Error('No elements in the stack');

    }

    push(value) {
        const node = new Node(value);
        node.next = this.stack;
        this.stack = node;
        this.length++;
        return this;
    }

    peek() {
        return this.stack.value;
    }
}

module.exports = Stack;