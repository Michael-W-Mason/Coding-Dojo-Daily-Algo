class Node {
    constructor(value, next = null) {
        this.data = value;
        this.next = next;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        if (this.head == null) {
            return true;
        } else {
            return false;
        }

    }

    print() {
        var arr = [];
        var runner = this.head;
        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        console.log(arr);
    }

    insertAtBack(val) {
        if (this.isEmpty()) {
            this.head = new Node(val);
        } else {
            var runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = new Node(val);
        }
    }

    insertAtFront(val) {
        this.head = new Node(val, this.head);
    }

    removeHead() {
        let current = this.head;
        this.head = current.next;
        return current;
    }

    average() {
        var runner = this.head;
        var sum = 0;
        let count = 0;
        while (runner) {
            sum += runner.data;
            count++;
            runner = runner.next;
        }
        return (sum / count);
    }

    contains(val) {
        let runner = this.head;
        if (this.isEmpty()) {
            return false;
        }
        while (runner) {
            if (runner.data === val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    recursiveContains(val, runner = this.head) {
        if (runner.data === val) {
            return true;
        }
        else if (runner.next === null) {
            return false;
        }
        else {
            return this.recursiveContains(val, runner.next)
        }
    }

    removeBack() {
        let runner = this.head;
        if (this.isEmpty()) {
            return "There are no nodes in this list"
        }
        if (!runner.next) {
            let temp = runner;
            this.removeHead();
            return temp;
        }
        while (runner.next.next) {
            runner = runner.next;
        }
        let temp = runner.next;
        runner.next = null;
        return temp;
    }

    secondToLast() {
        let runner = this.head;
        if (!runner.next) {
            return false;
        }
        while (runner.next.next) {
            runner = runner.next;
        }
        return runner;
    }

    removeVal(val, runner = this.head, removed = false) {
        if (this.isEmpty()) {
            return false;
        }
        while (runner.next) {
            if (runner.next.data === val) {
                break;
            }
            runner = runner.next;
        }
        if (!runner.next) {
            if (runner.data === val) {
                this.removeBack();
                return true;
            }
            else {
                return removed;
            }
        }
        let temp = runner.next;
        runner.next = temp.next;
        temp.next = null;
        return this.removeVal(val, runner, true);
    }

    prepend(ValA, ValB) {
        let runner = this.head;
        if (runner.data == ValB) {
            this.insertAtFront(ValA);
            return true;
        }
        if (this.isEmpty()) {
            return false;
        }
        while (runner.next) {
            if (runner.next.data == ValB) {
                break;
            }
            runner = runner.next;
        }
        if (!runner.next) {
            return false;
        }
        let temp = runner.next;
        runner.next = new Node(ValA, temp);
        return true;
    }

    concat(addList) {
        if (this.isEmpty()) {
            this.head = addList.head;
            return;
        }
        if (addList.isEmpty()) {
            return;
        }
        let runner = this.head;
        while (runner.next) {
            runner = runner.next;
        }
        let newRunner = addList.head;
        while (newRunner) {
            runner.next = newRunner;
            newRunner = newRunner.next;
            runner = runner.next;
        }
    }

    moveMinToFront() {
        if (this.isEmpty()) {
            return;
        }
        let runner = this.head;
        if (!runner.next) {
            return;
        }
        let min = Number.POSITIVE_INFINITY;
        let index = 0;
        let count = 0;
        while (runner) {
            if (runner.data < min) {
                index = count;
                min = runner.data;
            }
            runner = runner.next;
            count++;
        }
        if (index === 0) {
            return;
        }
        runner = this.head;
        for (let i = 0; i < index - 1; i++) {
            runner = runner.next;
        }
        let temp = runner.next;
        runner.next = temp.next;
        temp.next = null;
        this.insertAtFront(min);
    }

    splitOnVal(val) {
        if (this.isEmpty()) {
            return new SLL();
        }
        let runner = this.head;
        while (runner) {
            if (runner.next === null) {
                return new SLL();
            }
            if (runner.next.data === val) {
                break;
            }
            runner = runner.next;
        }
        if (runner === null) {
            return new SLL();
        }
        let newHead = runner.next;
        runner.next = null;
        let newSll = new SLL();
        newSll.head = newHead;
        return newSll;
    }

    reverse(current=this.head){
        if(this.isEmpty()){
            return null;
        }
        let second = current.next;
        if(!second){
            return current;
        }
        if(!second.next){
            second.next = current;
            this.head.next = null;
            this.head = second;
            return second;
        }
        else{
            this.reverse(second);
            second.next = current;
        }
    }

    hasLoop(){ 
        if(this.isEmpty()){
            return false;
        }
        let runner = this.head;
        let fastRunner = this.head.next;
        while(fastRunner){
            if(runner === fastRunner){
                return true;
            }
            else{
                runner=runner.next;
                try{
                    fastRunner=fastRunner.next.next;
                }
                catch{
                    return false;
                }
            }
        }
        return false;
    }

    removeNegative(){

    }
}

let sll = new SLL();
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;
sll.head = node1;
// sll.print();
console.log(sll.hasLoop());
// sll.print();