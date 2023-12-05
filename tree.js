import Node from "./node.js";

class Tree {
    constructor(mainArr) {
        this.root = this.buildTree(mainArr);
    }
    sort(array) {
        let newArr = [...new Set(array)].sort((a, b) => a - b);
        return newArr;
    }
    buildTree(array) {
        let sorted = this.sort(array);
        if (sorted.length === 0) return null;
        let mid = Math.floor(sorted.length / 2);
        if (sorted.length > 5) console.log(sorted);//DELETE
        let root = new Node(sorted[mid]);
        root.left = this.buildTree(sorted.slice(0, mid));
        root.right = this.buildTree(sorted.slice(mid + 1));
        return root;
    }
    insert(val, node = this.root) {
        if (node === null) {
            node = new Node(val);
            return node;
        }
        if (val < node.value) {
            node.left = this.insert(val, node.left);
        } else if (val > node.value) {
            node.right = this.insert(val, node.right);
        }
        return node;
    }
    delete(key, root = this.root) {
        if (root === null) return root;
        if (root.value > key) {
            root.left = this.delete(key, root.left);
            return root;
        } else if (root.value < key) {
            root.right = this.delete(key, root.right);
            return root;
        }
        if (root.left === null) {
            let newRoot = root.right;
            return newRoot;
        } else if (root.right === null) {
            let newRoot = root.left;
            return newRoot;
        } else { // If both children exist
            let parent = root;
            let successor = root.right;
            while (successor.left !== null) {
                parent = successor;
                successor = successor.left;
            }
            if (parent !== root) {
                parent.left = successor.right;
            } else {
                parent.right = successor.right;
            }
            root.value = successor.value;
            return root;
        }
    };
    find(key, node = this.root) {
        if (node === null || key === node.value) return node;
        if (key < node.value) {
            return this.find(key, node.left);
        } else {
            return this.find(key, node.right);
        }
    }
    levelOrder(callback) {
        if (this.root === null) return [];
        let queue = [this.root];
        const orderList = [];
        while (queue.length > 0) {
            let current = queue.shift();
            orderList.push(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
            if (callback) callback(current);
        }
        return orderList;
    }
    inOrder(callback, node = this.root, orderList = []) {
        //left, root, right 
        if (node === null) return;
        this.inOrder(callback, node.left, orderList);
        if (callback) callback(node);
        orderList.push(node.value);
        this.inOrder(callback, node.right, orderList);
        return orderList;
    }
    preOrder(callback, node = this.root, orderList = []) {
        //root, left, right
        if (node === null) return;
        if (callback) callback(node);
        orderList.push(node.value);
        this.preOrder(callback, node.left, orderList);
        this.preOrder(callback, node.right, orderList);
        return orderList;
    }
    postOrder(callback, node = this.root, orderList = []) {
        //left right root
        if (node === null) return;
        this.postOrder(callback, node.left, orderList);
        this.postOrder(callback, node.right, orderList);
        if (callback) callback(node);
        orderList.push(node.value);
        return orderList;
    }
    height(node = this.root) {
        if (node === null) return 0;
        let left = this.height(node.left);
        let right = this.height(node.right);
        if (left > right) return left + 1;
        return right + 1;
    }
    depth(key, node = this.root, count = 0) {
        if (node === null) return;
        if (key === node.value) return count;
        if (key > node.value) {
            return this.depth(key, node.right, count + 1);
        }
        return this.depth(key, node.left, count + 1);
    }
}
export default Tree;