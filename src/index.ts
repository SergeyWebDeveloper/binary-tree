interface IIteratorNavigation {
  next(): void;
}

interface ICreateIterator<T> {
  createIterator(): T
}

type THead = null | BinaryTreeNode;


class ConcreteIterator implements IIteratorNavigation {
  private readonly _binaryTreeHead: BinaryTreeNode;

  constructor(binaryTree: BinaryTreeNode) {
    this._binaryTreeHead = binaryTree;
  }

  next() {
    this.preOrder(this._binaryTreeHead);
  }

  private preOrder(node: BinaryTreeNode) {
    if (!node) return;
    this.preOrder(node.leftNode);
    this.preOrder(node.rightNode);
  }
}

class BinaryTree implements ICreateIterator<ConcreteIterator> {
  constructor(private _head: THead = null, private _countNode: number = 0) {}

  createIterator() {
    return new ConcreteIterator(this._head)
  }

  add(value: number) {
    if (this._head === null) {
      this._head = new BinaryTreeNode(value)
    } else {
      this.addTo(this._head, value);
    }
    this._countNode++;
  }

  private addTo(head: THead, value: number) {
    if (head.value > value) {
      if (head.leftNode === null) {
        head.leftNode = new BinaryTreeNode(value);
      } else {
        this.addTo(head.leftNode, value);
      }
    } else {
      if (head.rightNode === null) {
        head.rightNode = new BinaryTreeNode(value);
      } else {
        this.addTo(head.rightNode, value);
      }
    }
  }
}


class BinaryTreeNode {
  constructor(public value: number, public leftNode: BinaryTreeNode | null = null, public rightNode: BinaryTreeNode | null = null) {
  }
}

const tree = new BinaryTree();
tree.add(4);
tree.add(2);
tree.add(1);
tree.add(3);
tree.add(5);
tree.add(7);
tree.add(6);
tree.add(8);
tree.createIterator().next();
