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

}

let node1 = new Node(5);
let myBst = new BST(node1);