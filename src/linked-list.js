const Node = require('./node');
class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let newNode = new Node(data);
        
        if (this._head == null) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            newNode.prev = this._tail;
            this._tail.next = newNode;
            this._tail = newNode;       
        }
        
        this.length++;
    }

    head() {
        return (this._head != null) ? this._head.data : null;
    }

    tail() {
        return (this._tail != null) ? this._tail.data : null;
    }

    at(index) {
        let currNode = this._head;
        for (let i = 0; i < index; i++) {
            currNode = currNode.next;
        }
        return currNode.data;
    }

    insertAt(index, data) {
    }

    isEmpty() {
        return (this.length == 0) ? true : false; 
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {
        let currNode = this._head;

        if (currNode == null || (currNode.next == null && currNode.prev == null)) {
            this._head = null;
            this._tail = null;
        } 
        else {
            for (let i = 0; i < index; i++) {
                currNode = currNode.next;
            }
            currNode.prev.next = currNode.next;
            currNode.next.prev = currNode.prev;
        }
    
        this.length--;
    }

    reverse() {
    }

    indexOf(data) {
        let currNode = this._head;

        for (let i = 0; i < this.length; i++) {
            if (currNode.data == data) 
                return i;
            currNode = currNode.next;
        }
        
        return -1;
    }
}

module.exports = LinkedList;
