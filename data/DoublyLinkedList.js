class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    /**
     * Con estos metodos se utilizan las referencias en memoria de js de manera avanzada
     * puede resultar un poco confuso
     */

    append(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value){
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        // Obtener los nodos anteriores a donde se desea agregar
        const firstPointer = this.getTheIndex(index-1);
        // Obtener los nodos consecutivos a la posicion en la que se quiere agregar algo
        const holdingPointer = firstPointer.next;

        newNode.prev = firstPointer;
        newNode.next = holdingPointer;
        firstPointer.next = newNode;
        holdingPointer.prev = newNode;

        this.length++;
        return this;
    }

    delete(index){
        if (index >= this.length || index < 0) {
            return undefined;
        }
        
        const firstPart = this.getTheIndex(index-1);
        const lastPart = this.getTheIndex(index+1);
        firstPart.next = lastPart;
        lastPart.prev = firstPart;
        this.length--;
        return this;

    }

    shift(){
        const lastPart = this.getTheIndex(1);
        this.head.prev = null;
        this.head = lastPart;
        this.length--;
        return this;
    }

    getTheIndex(index){
        let counter = 0;
        let curretNode = this.head;

        while (counter != index) {
            curretNode = curretNode.next;
            counter++;
        }
        return curretNode;
    }
}

module.exports = DoublyLinkedList;


