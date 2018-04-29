// To traverse a tree depth-first, we completely traverse all 
// grandchild of a path before moving on to the next path.

/*To traverse a binary tree depth-first, we have three strategies namely:

* Pre-Order: we first check if the current node is non-empty, read its data and traverse its child nodes.

* In-Order: we'll check if its non-empty, traverse its left node, then read the data of the currentnode and traverse its right node.

* Post-Order: we'll check if its non-empty, traverse its left and right nodes respectively before reading the data of the current node.

*/


/*Code Samples*/

class Node {

	constructor(data, left, right) {
		this.data = data
		this.left = left
		this.right = right
	}

}


function preOrder(node) {
	if (!node) return;

	console.log(node.data)

	preOrder(node.left)
	preOrder(node.right)
}


function inOrder(node) {
	if (!node) return;

	preOrder(node.left)
	console.log(node.data)
	preOrder(node.right)
}

function postOrder(node) {
	if (!node) return;

	preOrder(node.left)
	preOrder(node.right)
	console.log(node.data)

}


