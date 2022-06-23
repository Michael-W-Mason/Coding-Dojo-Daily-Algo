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
        if(!start && !end){
            return this;
        }
        else if(start.next == end){
            this.head = this.tail;
            this.tail.prev = null;
            return this;
        }
        else if(start == end){
            this.head = null;
            this.tail = null;
            return this;
        }
        while(start !== end){
            start = start.next;
            end = end.prev;
        }
        start.prev.next = end.next;
        end.next.prev = start.prev;
        return this;
    }

    print() {
        let arr = [];
        let runner = this.head;
        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        console.log(arr);
    }
}

let dll = new Dll();
dll.insertAtBack(1);
dll.insertAtBack(2);
dll.insertAtBack(3);
dll.print();
dll.removeMiddle();
dll.print();
dll.removeMiddle();
dll.print();
dll.removeMiddle();
dll.print();
