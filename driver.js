import Tree from "./tree.js";
//
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
//
let arrayForTree = [2, 5, 6, 7, 2, 8, 4, 2, 1, 3];
let newTree = new Tree(arrayForTree);
//
newTree.insert(9);
prettyPrint(newTree.root);
console.log("Delete 8");
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
console.log("Height of tree");
console.log(newTree.height());
console.log("Depth of 1");
console.log(newTree.depth(1));
console.log("Is balanced?");
console.log(newTree.isBalance());
console.log("Insert numbers");
newTree.insert(11);
newTree.insert(13);
newTree.insert(14);
prettyPrint(newTree.root);
console.log("Is balanced?");
console.log(newTree.isBalance());
console.log("Re balance Tree");
newTree.reBalance();
prettyPrint(newTree.root);


