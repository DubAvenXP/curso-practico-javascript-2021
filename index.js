const { MyArray, HashTable, SinglyLinkedList, DoublyLinkedList, Stack, Queue } = require("./data");
const BinarySearchTree = require("./data/Tree");

const main = () => {
    /* const myArray = new MyArray();
    myArray.push('Pepe');
    myArray.push('Pedro');
    myArray.push('Paco');
    myArray.push('Pablo');
    myArray.push('Paola');
    console.log(myArray);
    myArray.unshift('Alejandro');
    console.log(myArray); */

    /* const myHashTable = new HashTable(50);
    myHashTable.set("Nombre", "Alejandro");
    myHashTable.set("Edad", 18);
    myHashTable.set("Apellido", "Ramos");
    console.log(myHashTable.get('Nombre'));
    console.log(myHashTable.getKeys());
    myHashTable.delete('Nombre');
    console.log(myHashTable.get('Nombre'));
    console.log(myHashTable.getKeys()); */

    /*  const mySinglyLinkedList = new SinglyLinkedList(1);
        mySinglyLinkedList.get();
        mySinglyLinkedList.append(2);
        mySinglyLinkedList.get();
        mySinglyLinkedList.append(3);
        mySinglyLinkedList.get();
        mySinglyLinkedList.insert(2, 222);
        mySinglyLinkedList.append(4);
        mySinglyLinkedList.get();
        console.log('\nDelete');
        mySinglyLinkedList.delete(4);
        mySinglyLinkedList.get();
     */

    /* const myDoublyLinkedList = new DoublyLinkedList(1);
    myDoublyLinkedList.append(2);
    myDoublyLinkedList.append(3);
    myDoublyLinkedList.append(4);
    myDoublyLinkedList.insert(2,0);
    console.log(myDoublyLinkedList); */

    /* const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.log(stack.peek());
    console.log(JSON.stringify(stack.stack));
    stack.pop();
    console.log(JSON.stringify(stack.stack)); */

/*     const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    console.log(JSON.stringify(queue));
    queue.dequeue();
    console.log(JSON.stringify(queue)); */

    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(10);
    binarySearchTree.insert(4);
    binarySearchTree.insert(20);
    binarySearchTree.insert(2);
    binarySearchTree.insert(8);
    binarySearchTree.insert(17);
    binarySearchTree.insert(170);
    // console.log(binarySearchTree.search(21));
    console.log(JSON.stringify(binarySearchTree));    
    console.log();
    console.log(JSON.stringify(binarySearchTree.delete(8)));    

}

main();