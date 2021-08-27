/**
Write a simple singly-linked list in Typescript using Typescript Interfaces. You should be able to:
Add a node to the list
Find a node on the list
Delete a node on the list
Console.log each step for each of the above operations.
Now extend your Typescript interfaces and use them to create a Doubly-linked list that does the same things!
You probably used an array under the hood as the data structure to implement your linked list. Can you think of another way to build a Linked List without using an array? Implement one! If you didn’t use an array, go ahead and implement a linked list using an array.
 */

type dataElement = any;
type nodeStringType = () => string;

interface aNode {
    data:dataElement;
    next:aNode;
    display:nodeStringType;
}

class listNode implements aNode {
    data:dataElement;
    next:listNode;
    display() {return `Node [data:${this.data}, next:${this.next}]`};

    constructor (d:any, n?:listNode) {
        this.data = d;
        this.next = n;
    }
}

interface sngLinkedList {
    head:aNode;
    size:number;
    isEmpty:() => boolean;
    length: () => number;
    indexOf:(dataElement) => number;
    insert: (dataElement, number?) => boolean;
    remove: (number) => aNode;
    display:() => void;
}

class singlyLinkedList implements sngLinkedList {
    head:listNode;
    size:number = 0;

    constructor(head:listNode = null) {
        this.head = head;
        this.size = 0;
    }

    isEmpty():boolean {
        return (this.size === 0);
    }

    length():number {
        return this.size;
    }

    indexOf(data:dataElement):number {
        let foundIndex = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) return foundIndex;
            currentNode = currentNode.next;
            foundIndex++;
        }
        return -1;
    }

    insert(data:dataElement, index?:number):boolean {
        let newNode: listNode = new listNode(data);
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return false;
        }
        else {
            if (!index) index = this.size;
            if (index === 0) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                let currentNode = this.head;
                for (let i = 0; i < index-1; i++) currentNode = currentNode.next;
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            }
            this.size++;
            return true;
        }
    }

    remove(index?:number):listNode {
        let removedNode = null;
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
        }
        else {
            if (!index) index = this.size-1;
            if (index === 0) {
                this.head = this.head.next;
                removedNode = this.head;
            }
            else {
                let currentNode:listNode = this.head;
                for (let i = 0; i < index-1; i++) currentNode = currentNode.next;
                removedNode = currentNode.next;
                currentNode.next = (currentNode.next).next;
            }
            this.size--;
        }
        return removedNode;
    }

    display() {
        let currentNode = this.head;
        console.log(`\nList:`);
        if (!currentNode) console.log(`Is empty!`);
        else while (currentNode) {
            console.log(currentNode.display());
            currentNode = currentNode.next;
        }
    }
}




interface dNode extends aNode {
    next:dNode;
    previous:dNode;
}

class dblLinkNode implements dNode {
    data: dataElement;
    next: dblLinkNode;
    previous:dblLinkNode;
    display() {return `Node [data:${this.data}, previous:${this.previous}, next:${this.next}]`;}

    constructor(d: any, p?:dblLinkNode, n?:dblLinkNode) {
        this.data = d;
        this.previous = p;
        this.next = n;
    }
}

interface dblLinkedList extends sngLinkedList {
    head:dNode;
    size:number;
    isEmpty:() => boolean;
    length: () => number;
    indexOf:(dataElement) => number;
    insert: (dataElement, number?) => boolean;
    remove: (number) => dNode;
    display:() => void;
}

class doublyLinkedList extends singlyLinkedList implements dblLinkedList {
    head:dblLinkNode;
    size:number = 0;

    constructor(head:dblLinkNode = null) {
        super();
    }

    insert(data:dataElement, index?:number):boolean {
        let newNode: dblLinkNode = new dblLinkNode(data);
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return false;
        }
        else {
            if (!index) index = this.size;
            if (index === 0) {
                if (this.head) this.head.previous = newNode;
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                let currentNode = this.head;
                for (let i = 0; i < index-1; i++) currentNode = currentNode.next;
                if (currentNode.next) (currentNode.next).previous = newNode;
                newNode.next = currentNode.next;
                newNode.previous = currentNode;
                currentNode.next = newNode;
            }
            this.size++;
            return true;
        }
    }

    remove(index?:number):dblLinkNode {
        let removedNode = null;
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
        }
        else {
            if (!index) index = this.size-1;
            if (index === 0) {
                (this.head.next).previous = null;
                this.head = this.head.next;
                removedNode = this.head;
            }
            else {
                let currentNode:dblLinkNode = this.head;
                for (let i = 0; i < index-1; i++) currentNode = currentNode.next;
                removedNode = currentNode.next;
                ((currentNode.next).next).previous = currentNode;
                currentNode.next = (currentNode.next).next;
            }
            this.size--;
        }
        return removedNode;
    }
}


function test(list) {
    // testing isEmpty on an empty list
    // returns true
    console.log(`\nList empty? ${list.isEmpty()}`);

    // adding element to the list
    list.insert(10);

    // prints 10
    list.display();

    // returns 1
    console.log(`\nList length: ${list.length()}`);

    // adding more elements to the list
    list.insert(20);
    list.insert(30);
    list.insert(40);
    list.insert(50);

    // returns 10 20 30 40 50
    list.display();

    // returns 3
    console.log("\nIndex of 40: " + list.indexOf(40));

    // insert 60 at second position
    // list contains 10 20 60 30 40 50
    list.insert(60, 2);

    list.display();

    // returns false
    console.log("\nis List Empty ? " + list.isEmpty());

    // remove element at index 3 from the list
    /*console.log*/(list.remove(3));

    // prints 10 20 60 40 50
    list.display();
}



let list = new singlyLinkedList();
console.log('\n\n\nSingly-Linked List Test:');
test(list);

let dblList = new doublyLinkedList();
console.log('\n\n\nDouble-Linked List Test:');
test(dblList);


