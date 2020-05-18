import { LinkedList } from "../../abstract/LinkedList";
import { StringNode } from "../../interfaces/StringNode";

export class StringLinkedList extends LinkedList<string> {
  compare(leftIndex: number, rightIndex: number): boolean {
    const leftNode: StringNode = this.at(leftIndex);
    const rightNode: StringNode = this.at(rightIndex);
    return leftNode.data.toLowerCase() > rightNode.data.toLowerCase();
  }
}
