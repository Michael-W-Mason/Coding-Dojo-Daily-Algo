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
            this.size++
            return this.size;
        }
        else{
            this.tail.next = node;
            this.tail = node;
            this.size++
            return this.size;

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
            this.size--;
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


    compare(queue) {
        let runner1 = this.top;
        let runner2 = queue.top;
        while(runner1 || runner2){
            try{
                if(runner1.data !== runner2.data){
                    return false;
                }
            }
            catch{
                return false;
            }
            runner1 = runner1.next;
            runner2 = runner2.next;
        }
        return true;
    }


    isPalidrome() {
        let hash = {};
        let count = Math.floor(this.size / 2);
        let runner = this.top;
        let i = 0;
        if(this.isEmpty()){
            return true;
        }
        // Generate Hash Map up to first half of queue
        while(i < count){
            hash[i] = runner.data;
            runner = runner.next;
            i++;
        }
        // Move iterator back one so its at a valid point on our hash
        i--;
        // If our queue is odd then we want to ignore the middle value because it does not need to be compared to anything
        if(this.size % 2 !== 0){
            runner = runner.next;
        }
        // Continue through second half of our queue and compare it to first half stored in the hash
        while(runner){
            if(hash[i] === runner.data){
                i--;
                runner = runner.next;
            }
            else {
                return false;
            }
        }
        return true;
    }
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
// myQueue.enqueue(3);
// myQueue.enqueue(2);
// myQueue.enqueue(1);
myQueue.Log();

// let myQueue2 = new Queue();
// myQueue2.enqueue(1);
// myQueue2.enqueue(2);
// myQueue2.enqueue(3);

// let temp = myQueue;
// temp.top.next = undefined;
// myQueue.Log();

console.log(myQueue.isPalidrome());
