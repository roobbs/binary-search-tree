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
        if (sorted.length > 5) console.log(sorted);
        let root = new Node(sorted[mid]);
        root.left = this.buildTree(sorted.slice(0, mid));
        root.right = this.buildTree(sorted.slice(mid + 1));
        return root;
    }
}
export default Tree;