class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class SinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    /**
     * Con estos metodos se utilizan las referencias en memoria de js de manera avanzada
     * puede resultar un poco confuso
     */
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(){
        console.log('\nHead');
        console.log(JSON.stringify(this.head));
        console.log('Tail');
        console.log(JSON.stringify(this.tail));
    }

    insert(index, value){
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index-1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

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

module.exports = SinglyLinkedList;
