class Node{
    constructor(data, next=undefined){
        this.data = data;
        this.next = next;
    }
}

class Queue{
    constructor(top=undefined, tail=undefined, size=0){
        this.tail = tail;
        this.top = top;
        this.size = size;
    }

    // Enqueue - add an item and return the new size of the queue
    enqueue(val) {
        // your code here
        let node = new Node(val);
        if(this.isEmpty()){
            this.tail = node;
            this.top = node;
            return this;
        }
        else{
            this.tail.next = node;
            this.tail = node;
            return this;
        }
    }
    
    // Dequeue - remove and return the first item
    dequeue() {
        if(this.isEmpty()){
            return this;
        }
        else{
            let temp = this.top;
            this.top = this.top.next;
            temp.next = undefined;
            return temp;
        }
    }
    // IsEmpty - return true or false whether the queue is empty
    isEmpty() {
        // your code here
        if(!this.top){
            return true;
        }
        return false;
    }
    
    // Front - return the first item without removing it
    front() {
        // your code here
        return this.top;
    }

    Log() {
        let str = "";
        for (let node = this.top; node; node = node.next) {
            str += node.data + "->";
        }
        console.log(str);
    }
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.Log();
myQueue.dequeue();
myQueue.Log();
console.log(myQueue.front());
console.log(myQueue.top.data, myQueue.tail.data);
