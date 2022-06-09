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
        while (runner) {
            sum += runner.data;
            runner = runner.next;
        }
        return (sum / this.size);
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

    // Return (don't remove) the second to last value in your list (ex: if your list is 2, 5, 6, 3, 9, you should return 3)
    secondToLast() {
        let runner = this.head;
        if(!runner.next){
            return false;
        }
        while (runner.next.next) {
            runner = runner.next;
        }
        return runner;
    }

    // Given a value, remove that value from the list and return true or false whether it was removed
    removeVal(val, runner=this.head, removed=false) {
        if(this.isEmpty()){
            return false;
        }
        while(runner.next){
            if(runner.next.data === val){
                break;
            }
            runner = runner.next;
        }
        if(!runner.next){
            if(runner.data === val){
                this.removeBack();
                return true;
            }
            else{
                return removed;
            }
        }
        let temp = runner.next;
        runner.next = temp.next;
        temp.next = null;
        return this.removeVal(val, runner, true);
    }
    // Note: how would this code look if you only wanted to remove one instance of the value? How would this code look if you wanted to remove ALL instances of the value? (ie: plan for duplicates)

    // EXTRA: Given ValueA and ValueB, insert a node with ValueA BEFORE the node containing ValueB (this is called a prepend) and return true or false whether it was pre-pended
    prepend(ValA, ValB) {
        let runner = this.head;
        if(runner.data == ValB){
            this.insertAtFront(ValA);
            return true;
        }
        if(this.isEmpty()){
            return false;
        }
        while(runner.next){
            if(runner.next.data == ValB){
                break;
            }
            runner = runner.next;
        }
        if(!runner.next){
            return false;
        }
        let temp = runner.next;
        runner.next = new Node(ValA, temp);
        return true;
    }
}

let sll = new SLL();
sll.insertAtFront(4);
sll.insertAtBack(5);
sll.insertAtBack(6);
sll.print();
console.log(sll.prepend(7, 8));
sll.print();