import { Node } from "../classes/Node";
import { Sorter } from "./Sorter";

export abstract class LinkedList<T> extends Sorter {
  head: Node<T> | null = null;

  get length(): number {
    let length = 0;
    let node = this.head;
    while (node) {
      length++;
      node = node.next;
    }
    return length;
  }

  add(data: T): LinkedList<T> {
    if (!this.head) {
      this.head = new Node<T>(data);
      return this;
    }

    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = new Node<T>(data);
    return this;
  }

  at(index: number): Node<T> {
    if (!this.head) {
      throw new Error("Accessing Empty LinkedList");
    }

    let count = 0;
    let node: Node<T> | null = this.head;

    while (node) {
      if (count === index) {
        return node;
      }
      count++;
      node = node.next;
    }

    throw new Error(`Data does not exist at index ${index}!`);
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftNodeData = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftNodeData;
  }

  print(): void {
    let node = this.head;

    while (node) {
      console.log(`${node.data}\n`);
      node = node.next;
    }
  }
}
