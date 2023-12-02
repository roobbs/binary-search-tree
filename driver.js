import Tree from "./tree.js";

let arrayForTree = [2, 5, 6, 7, 2, 8, 4, 2, 1];
console.log(arrayForTree);
let newTree = new Tree(arrayForTree);
console.log(newTree);
console.log(newTree.root);