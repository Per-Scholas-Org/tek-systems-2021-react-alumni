/**
Write a simple singly-linked list in Typescript using Typescript Interfaces. You should be able to:
Add a node to the list
Find a node on the list
Delete a node on the list
Console.log each step for each of the above operations.
Now extend your Typescript interfaces and use them to create a Doubly-linked list that does the same things!
You probably used an array under the hood as the data structure to implement your linked list. Can you think of another way to build a Linked List without using an array? Implement one! If you didn’t use an array, go ahead and implement a linked list using an array.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var listNode = /** @class */ (function () {
    function listNode(d, n) {
        this.data = d;
        this.next = n;
    }
    listNode.prototype.display = function () { return "Node [data:" + this.data + ", next:" + this.next + "]"; };
    ;
    return listNode;
}());
var singlyLinkedList = /** @class */ (function () {
    function singlyLinkedList(head) {
        if (head === void 0) { head = null; }
        this.size = 0;
        this.head = head;
        this.size = 0;
    }
    singlyLinkedList.prototype.isEmpty = function () {
        return (this.size === 0);
    };
    singlyLinkedList.prototype.length = function () {
        return this.size;
    };
    singlyLinkedList.prototype.indexOf = function (data) {
        var foundIndex = 0;
        var currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data)
                return foundIndex;
            currentNode = currentNode.next;
            foundIndex++;
        }
        return -1;
    };
    singlyLinkedList.prototype.insert = function (data, index) {
        var newNode = new listNode(data);
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return false;
        }
        else {
            if (!index)
                index = this.size;
            if (index === 0) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                var currentNode = this.head;
                for (var i = 0; i < index - 1; i++)
                    currentNode = currentNode.next;
                newNode.next = currentNode.next;
                currentNode.next = newNode;
            }
            this.size++;
            return true;
        }
    };
    singlyLinkedList.prototype.remove = function (index) {
        var removedNode = null;
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
        }
        else {
            if (!index)
                index = this.size - 1;
            if (index === 0) {
                this.head = this.head.next;
                removedNode = this.head;
            }
            else {
                var currentNode = this.head;
                for (var i = 0; i < index - 1; i++)
                    currentNode = currentNode.next;
                removedNode = currentNode.next;
                currentNode.next = (currentNode.next).next;
            }
            this.size--;
        }
        return removedNode;
    };
    singlyLinkedList.prototype.display = function () {
        var currentNode = this.head;
        console.log("\nList:");
        if (!currentNode)
            console.log("Is empty!");
        else
            while (currentNode) {
                console.log(currentNode.display());
                currentNode = currentNode.next;
            }
    };
    return singlyLinkedList;
}());
var dblLinkNode = /** @class */ (function () {
    function dblLinkNode(d, p, n) {
        this.data = d;
        this.previous = p;
        this.next = n;
    }
    dblLinkNode.prototype.display = function () { return "Node [data:" + this.data + ", previous:" + this.previous + ", next:" + this.next + "]"; };
    return dblLinkNode;
}());
var doublyLinkedList = /** @class */ (function (_super) {
    __extends(doublyLinkedList, _super);
    function doublyLinkedList(head) {
        if (head === void 0) { head = null; }
        var _this = _super.call(this) || this;
        _this.size = 0;
        return _this;
    }
    doublyLinkedList.prototype.insert = function (data, index) {
        var newNode = new dblLinkNode(data);
        if (index < 0 || index > this.size) {
            console.log("Invalid index");
            return false;
        }
        else {
            if (!index)
                index = this.size;
            if (index === 0) {
                if (this.head)
                    this.head.previous = newNode;
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                var currentNode = this.head;
                for (var i = 0; i < index - 1; i++)
                    currentNode = currentNode.next;
                if (currentNode.next)
                    (currentNode.next).previous = newNode;
                newNode.next = currentNode.next;
                newNode.previous = currentNode;
                currentNode.next = newNode;
            }
            this.size++;
            return true;
        }
    };
    doublyLinkedList.prototype.remove = function (index) {
        var removedNode = null;
        if (index < 0 || index >= this.size) {
            console.log("Invalid index");
        }
        else {
            if (!index)
                index = this.size - 1;
            if (index === 0) {
                (this.head.next).previous = null;
                this.head = this.head.next;
                removedNode = this.head;
            }
            else {
                var currentNode = this.head;
                for (var i = 0; i < index - 1; i++)
                    currentNode = currentNode.next;
                removedNode = currentNode.next;
                ((currentNode.next).next).previous = currentNode;
                currentNode.next = (currentNode.next).next;
            }
            this.size--;
        }
        return removedNode;
    };
    return doublyLinkedList;
}(singlyLinkedList));
function test(list) {
    // testing isEmpty on an empty list
    // returns true
    console.log("\nList empty? " + list.isEmpty());
    // adding element to the list
    list.insert(10);
    // prints 10
    list.display();
    // returns 1
    console.log("\nList length: " + list.length());
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
    /*console.log*/ (list.remove(3));
    // prints 10 20 60 40 50
    list.display();
}
var list = new singlyLinkedList();
console.log('\n\n\nSingly-Linked List Test:');
test(list);
var dblList = new doublyLinkedList();
console.log('\n\n\nDouble-Linked List Test:');
test(dblList);
