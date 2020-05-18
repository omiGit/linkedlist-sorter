import { LinkedList } from "../../abstract/LinkedList";
import { NumberNode } from "../../interfaces/NumberNode";
export class NumberLinkedList extends LinkedList<number> {
  compare(leftIndex: number, rightIndex: number): boolean {
    const leftNode: NumberNode = this.at(leftIndex);
    const rightNode: NumberNode = this.at(rightIndex);
    return leftNode.data > rightNode.data;
  }
}
