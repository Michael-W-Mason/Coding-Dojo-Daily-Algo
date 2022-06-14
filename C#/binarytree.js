class Node{
    constructor(data, left=null, right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST{
    constructor(root=null){
        this.root = root;
    }

    isEmpty(){
        if(this.root === null){
            return true;
        }
        else{
            return false;
        }
    }

    min(){
        let runner = this.root;
        while(runner.left){
            runner = runner.left;
        }
        return runner.data;
    }

    max(){
        let runner = this.root;
        while(runner.right){
            runner = runner.right;
        }
        return runner.data;
    }

    contains(val){
        let runner = this.root;
        if(!runner){
            return false;
        }
        while(runner){
            if(runner.data === val){
                return true;
            }
            else if(runner.data > val){
                runner = runner.left;
            }
            else{
                runner = runner.right;
            }
        }
        return false;
    }

    containsRecursive(val, runner=this.root){
        if(!runner){
            return false;
        }
        if(runner.data === val){
            return true;
        }
        else if(runner.data > val){
            return this.containsRecursive(val, runner.left);
        }
        else{
            return this.containsRecursive(val, runner.right);
        }
    }

    range(){
        return this.max() - this.min();
    }

    height(branch=this.head){
        if(!branch){
            return 0;
        }
        else{   
            return 1 + Math.max(this.height(branch.left), this.height(branch.right));
        }
    }
}

let node1 = new Node(5);
let node2 = new Node(4);
let node3 = new Node(6);

let node4 = new Node(5.5);
let node5 = new Node(8);

let node6 = new Node(3);
let node7 = new Node(4.5);

node1.left = node2;
node1.right = node3;

node2.left = node6;
node2.right = node7;

node3.left = node4;
node3.right = node5;

let myBst = new BST(node1);
console.log(myBst.height());