import Tree from "./tree.js";
let arrayForTree = [2, 5, 6, 7, 2, 8, 4, 2, 1, 3/* 9, 15, 30, 20, 22, 16, 14, 14, 15*/];
let newTree = new Tree(arrayForTree);
const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};
newTree.insert(9);
prettyPrint(newTree.root);
newTree.delete(8);
prettyPrint(newTree.root);
console.log("Find 2")
console.log(newTree.find(2));
console.log("Level Order");
console.log(newTree.levelOrder());
console.log("Pre Order");
console.log(newTree.preOrder());
console.log("In Order");
console.log(newTree.inOrder());
console.log("Post Order");
console.log(newTree.postOrder());
console.log("Height");
console.log(newTree.height());
console.log("Depth");
console.log(newTree.depth(1));
