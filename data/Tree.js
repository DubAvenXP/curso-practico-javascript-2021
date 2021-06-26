class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }

    }

    search(value) {
        let currentNode = this.root;
        while (true) {

            if (value === currentNode.value) {
                return currentNode;
            } 

            if (isNaN(currentNode.left) || isNaN(currentNode.right)) {
                return undefined;
            }

            if (value <= currentNode.value  ) {
                currentNode = currentNode.left;
                continue;
            } 

            if (value >= currentNode.value) {
                currentNode = currentNode.right;
                continue;
            }

        }
    }
}

module.exports = BinarySearchTree;