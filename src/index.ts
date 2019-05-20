interface IIterator<T> {
  next(): T;
  hasNext(): boolean;
}

type THead<T> = null | BinaryTreeNode<T>;

class BinaryTree<T> {
  constructor(private _head: THead<T> = null, private _countNode: number=0) {}

  add(value: T) {
    if (this._head === null) {
      this._head = new BinaryTreeNode(value)
    } else {

      this.addTo(this._head, value);
    }
    this._countNode++;
  }

  private addTo(head: THead<T>, value: T) {
    if(head.value > value) {
      if(head.leftNode === null) {
        head.leftNode = new BinaryTreeNode(value);
      } else {
        this.addTo(head.leftNode, value);
      }
    } else {
      if(head.rightNode === null) {
        head.rightNode = new BinaryTreeNode(value);
      } else {
        this.addTo(head.rightNode, value);
      }
    }
  }
}


class BinaryTreeNode<T> {
  constructor(public value: T, public leftNode: BinaryTreeNode<T> | null = null, public rightNode: BinaryTreeNode<T> | null = null) {}
}


const tree = new BinaryTree<number>();
tree.add(5);
tree.add(9);
tree.add(15);
tree.add(2);
tree.add(8);
