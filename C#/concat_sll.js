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

    // Given a different singly linked list, concatenate the values of that list onto the back of your own (ex: if your original list contained 1, 2, 3 and the given list contained 4, 5, 6, you should now have a list that contains the values 1, 2, 3, 4, 5, 6)
    concat(addList) {
        if(this.isEmpty()){
            this.head = addList.head;
            return;
        }
        if(addList.isEmpty()){
            return;
        }
        let runner = this.head;
        while(runner.next){
            runner = runner.next;
        }
        let newRunner = addList.head;
        while(newRunner){
            runner.next = newRunner;
            newRunner = newRunner.next;
            runner = runner.next;
        }
    }

    // Find the smallest value in your list and move it to the front (ex: if your list looked like this: 4, 8, 2, 5, then after the function it should look like this: 2, 4, 8, 5)
    moveMinToFront() {
        if(this.isEmpty()){
            return;
        }
        let runner = this.head;
        if(!runner.next){
            return;
        }
        let min = Number.POSITIVE_INFINITY;
        let index = 0;
        let count = 0;
        while(runner){
            if(runner.data < min){
                index = count;
                min = runner.data;
            }
            runner = runner.next;
            count++;
        }
        if(index === 0){
            return;
        }
        runner = this.head;
        for(let i = 0; i < index - 1; i++){
            runner = runner.next;
        }
        let temp = runner.next;
        runner.next = temp.next;
        temp.next = null;
        this.insertAtFront(min);
    }

    // EXTRA: Given a value, split your list into two lists along that value. Ex: if your original list was 1, 2, 3, 4, 5 and you were given 3, your first list should have 1, 2 and your second list should have 3, 4, 5
    splitOnVal(val) {
        if(this.isEmpty()){
            return new SLL();
        }
        let runner = this.head;
        while(runner){
            if(runner.next === null){
                return new SLL();
            }
            if(runner.next.data === val){
                break;
            }
            runner = runner.next;
        }
        if(runner === null){
            return new SLL();
        }
        let newHead = runner.next;
        runner.next = null;
        let newSll = new SLL();
        newSll.head = newHead;
        return newSll;
    }
}

let sll = new SLL();
let sll2 = new SLL();
// sll.insertAtFront(1);
// sll.insertAtBack(2);
// sll.insertAtBack(3);
// sll2.insertAtFront(1);
// sll2.insertAtBack(5);
// sll2.insertAtBack(6);
// sll.print();
// sll2.print();
// sll.concat(sll2);
// sll.print();
sll.insertAtFront(1);
sll.insertAtBack(2);
sll.insertAtBack(3);
sll.insertAtBack(4);
sll.insertAtBack(7);
sll.print();
sll3 = sll.splitOnVal(1);
sll.print();
sll3.print();
