import { NumberLinkedList } from "./classes/LinkedList/NumberLinkedList";
import { StringLinkedList } from "./classes/LinkedList/StringLinkedList";

const numberLinkedList = new NumberLinkedList();
numberLinkedList.add(10);
numberLinkedList.add(1);
numberLinkedList.add(-2);
numberLinkedList.add(3);

const stringLinkedList = new StringLinkedList();
stringLinkedList.add("Z");
stringLinkedList.add("a");
stringLinkedList.add("y");
stringLinkedList.add("x");

numberLinkedList.sort().print();

stringLinkedList.sort().print();

for (let i = 0; i < 4; i++) console.log(numberLinkedList.at(i));
