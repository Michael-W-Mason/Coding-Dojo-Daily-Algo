class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(root = null) {
        this.root = root;
    }

    isEmpty() {
        if (this.root === null) {
            return true;
        }
        else {
            return false;
        }
    }

    min() {
        let runner = this.root;
        while (runner.left) {
            runner = runner.left;
        }
        return runner.data;
    }

    max() {
        let runner = this.root;
        while (runner.right) {
            runner = runner.right;
        }
        return runner.data;
    }

    contains(val) {
        let runner = this.root;
        if (!runner) {
            return false;
        }
        while (runner) {
            if (runner.data === val) {
                return true;
            }
            else if (runner.data > val) {
                runner = runner.left;
            }
            else {
                runner = runner.right;
            }
        }
        return false;
    }

    containsRecursive(val, runner = this.root) {
        if (!runner) {
            return false;
        }
        if (runner.data === val) {
            return true;
        }
        else if (runner.data > val) {
            return this.containsRecursive(val, runner.left);
        }
        else {
            return this.containsRecursive(val, runner.right);
        }
    }

    range() {
        return this.max() - this.min();
    }

    insert(val) {
        let runner = this.root;
        if (!runner) {
            this.root = new Node(val);
            return;
        }
        while (true) {
            if (val > runner.data) {
                if (!runner.right) {
                    runner.right = new Node(val);
                    return;
                }
                else {
                    runner = runner.right;
                }
            }
            else if (val < runner.data) {
                if (!runner.left) {
                    runner.left = new Node(val);
                    return;
                }
                else {
                    runner = runner.left;
                }
            }
            else {
                let temp = runner;
                runner = runner.left;
                temp.left = new Node(val);
                temp.left.left = runner;
                return;
            }
        }
    }

    insertRecursive(val, runner = this.root) {
        if (!runner) {
            this.root = new Node(val);
            return;
        }
        if (val > runner.data) {
            if (!runner.right) {
                runner.right = new Node(val);
                return;
            }
            else {
                runner = runner.right;
                return this.insertRecursive(val, runner);
            }
        }
        else if (val < runner.data) {
            if (!runner.left) {
                runner.left = new Node(val);
                return;
            }
            else {
                runner = runner.left;
                return this.insertRecursive(val, runner);
            }
        }
        else {
            let temp = runner;
            runner = runner.left;
            temp.left = new Node(val);
            temp.left.left = runner;
            return;
        }
    }

    size(runner = this.root) {
        if (runner === null) {
            return 0;
        }
        else {
            return 1 + this.size(runner.left) + this.size(runner.right);
        }
    }

    height(runner = this.root) {
        if (runner === null) {
            return 0;
        }
        else {
            return 1 + Math.max(this.height(runner.left), this.height(runner.right));
        }
    }

    isFull(runner = this.root) {
        if (runner === null) {
            return true;
        }
        else if (runner.right === null && runner.left !== null) {
            return false;
        }
        else if (runner.right !== null && runner.left === null) {
            return false;
        }
        else {
            return this.isFull(runner.left) && this.isFull(runner.right);
        }
    }

    PreOder(runner = this.root, arr = []) {
        // If our BST is empty return empty array
        if (!runner) {
            return arr;
        }
        arr.push(runner.data);
        // If we hit last node of branch push to array
        if (!runner.left && !runner.right) {
            return;
        }
        // Go Through left side first
        if (runner.left) {
            this.PreOder(runner.left, arr);
        }
        // Go through right side
        if (runner.right) {
            this.PreOder(runner.right, arr);
        }
        return arr;
    }

    InOrder(runner = this.root, arr = []) {
        // If our BST is empty return empty array
        if (!runner) {
            return arr;
        }
        if (!runner.left && !runner.right) {
            arr.push(runner.data);
            return;
        }
        if (runner.left) {
            this.InOrder(runner.left, arr)
            arr.push(runner.data);
        }
        if (runner.right && !runner.left) {
            arr.push(runner.data);
            this.InOrder(runner.right, arr);
        }
        else{
            this.InOrder(runner.right, arr);
        }
        return arr;
    }


}

let myBst = new BST();
myBst.insertRecursive(4);
myBst.insertRecursive(3);
myBst.insertRecursive(2);
myBst.insertRecursive(3.2);
myBst.insertRecursive(5);
myBst.insertRecursive(6);

console.log(myBst.InOrder());