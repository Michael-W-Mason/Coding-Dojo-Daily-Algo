class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class Dll {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }

    insertAtFront(val) {
        let node = new Node(val);
        if (!this.head && !this.tail) {
            this.head = node;
            this.tail = node;
            return this;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        return this;
    }

    insertAtBack(val) {
        let node = new Node(val);
        if (!this.head && !this.tail) {
            this.head = node;
            this.tail = node;
            return this;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        return this;
    }

    removeMiddle() {
        let start = this.head;
        let end = this.tail;
        if (!start && !end) {
            return this;
        }
        else if (start.next == end) {
            this.head = this.tail;
            this.tail.prev = null;
            return this;
        }
        else if (start == end) {
            this.head = null;
            this.tail = null;
            return this;
        }
        while (start !== end) {
            start = start.next;
            end = end.prev;
        }
        start.prev.next = end.next;
        end.next.prev = start.prev;
        return this;
    }

    insertAfter(search, val) {
        let runner = this.head;
        while (runner) {
            if (runner.data === search) {
                break;
            }
            runner = runner.next;
        }
        if (!runner) {
            return "Value does not exist";
        }
        let node = new Node(val);
        if (runner === this.tail) {
            runner.next = node;
            node.prev = runner;
            this.tail = node;
        }
        else {
            node.next = runner.next;
            node.prev = runner;
            runner.next.prev = node;
            runner.next = node;
        }
        return this;
    }

    insertBefore(search, val) {
        let runner = this.head;
        while (runner) {
            if (runner.data === search) {
                break;
            }
            runner = runner.next;
        }
        if (!runner) {
            return "Value does not exist";
        }
        let node = new Node(val);
        if (runner === this.head) {
            node.next = runner;
            runner.prev = node;
            this.head = node;
        }
        else {
            node.next = runner;
            node.prev = runner.prev;
            runner.prev.next = node;
            runner.prev = node;
        }
        return this;
    }

    reverse() {
        let temp = null;
        let start = this.head;
        let end = this.tail;
        if(!start){
            return this;
        }
        while(start !== end){
            if(start.next === end){
                break;
            }
            temp = start.data;
            start.data = end.data;
            end.data = temp;
            start = start.next;
            end = end.prev;
        }
        return this; 
    }

    print() {
        let arr = [];
        let arr2 = [];
        let runner = this.head;
        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        runner = this.tail;
        while (runner) {
            arr2.push(runner.data);
            runner = runner.prev;
        }
        console.log(arr, arr2);
    }
}

let dll = new Dll();
dll.insertAtBack(1);
dll.insertAtBack(2);
dll.insertAtBack(3);
dll.insertAtBack(4);
dll.insertAtBack(5);
dll.print();
dll.reverse();
dll.print();
console.log(dll.head.data, dll.tail.data);
