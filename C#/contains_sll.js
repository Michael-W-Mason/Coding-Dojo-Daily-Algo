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
        this.size++;
    }

    insertAtFront(val) {
        this.head = new Node(val, this.head);
        this.size++;
    }

    removeHead() {
        let current = this.head;
        this.head = current.next;
        this.size--;
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

    contains(val){
        let runner = this.head;
        if(this.isEmpty()){
            return false;
        }
        while(runner){
            if(runner.data === val){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    recursiveContains(val, runner=this.head){
        if(runner.data === val){
            return true;
        }
        else if (runner.next === null){
            return false;
        }
        else{
            return this.recursiveContains(val, runner.next)
        }
    }

    removeBack(){
        let runner = this.head;
        if(this.isEmpty()){
            return "There are no nodes in this list"
        }
        if(!runner.next){
            let temp = runner;
            this.removeHead();
            return temp;
        }
        while(runner.next.next){
            runner = runner.next;
        }
        let temp = runner.next;
        runner.next = null;
        return temp;
    }
}

let sll = new SLL();
sll.insertAtFront(4);
sll.insertAtBack(5);
sll.insertAtBack(6);
sll.print();
console.log(sll.removeBack());
sll.print();