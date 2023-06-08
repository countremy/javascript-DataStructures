//Linked List no in a continuous spot in memory so more information has to be tracked
//This file will build out our Linked List class to be able to do operations on our list
class Node {

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    //Add Value to end Of Linked List
    push(value) {

        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //Remove Node from the End Of the Linked List and returns that Node
    pop() {
        
        if(!this.head) return undefined;

        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null
        }
        
        return this;
    }

    //Add Node to Beginning of List
    unshift(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    //Remove First item to Linked List
    shift() {
        if(!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        
        if(this.length === 0) {
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }

    //Get Node at given index
    get(index) {
        if (index <0 || index > this.length) return invalid;
        let temp = this.head;
        for(let i = 0;i < index; i++) {
            temp = temp.next
        }
        return temp;

    }

    //Set the value of A Node
    set(index, value) {
        const newNode = new Node(value);

        let temp = this.get(index);
        if(temp) {
            temp.value = value;
            return true;
        }else {
            return false;
        }
    }

    //Insert A Node
    insert(index, value) {
        if (index === 0 ) return this.unshift(value);
        if (index === this.length) return this.push(value);
        if (index < 0 || index > this.length) return false;

        const newNode = new Node(value);
        const temp = this.get(index -1);
        
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;


    }

    //Remove A Node
    remove(index, value) {
        if (index === 0 ) return this.shift();
        if (index === this.length -1 ) return this.pop();
        if (index < 0 || index >= this.length) return undefined;

        const before = this.get(index-1);
        const temp = before.next;

        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;

    }

    reverse() {
        let temp = this.head;
        this.head = this.tail
        this.tail = temp;

        let next = temp.next;
        let prev = null;

        for(let i = 0; i < this.length; i++) {
            next =temp.next;
            temp.next = prev;
            prev =temp;
            temp = next;
        }
        return this;




    }

}


let myLinkedList = new LinkedList(10);
myLinkedList.push(20);
console.log(myLinkedList);
console.table(myLinkedList);

//test pop method
const myLL2 = new LinkedList(5);
myLL2.push(10);
console.table(myLL2);
console.table(myLL2.pop());
console.table(myLL2.pop());
console.table(myLL2.pop());
console.table(myLL2);

//test unshift
const myLL3 = new LinkedList(10);
myLL3.push(20);
myLL3.push(30);
console.table(myLL3);
myLL3.unshift(40);
console.table(myLL3);

const myLL4 = new LinkedList(2);
myLL4.push(3);
myLL4.shift();
console.table(myLL4);
myLL4.shift();
console.table(myLL4);

const myLL5 = new LinkedList(56);
myLL5.push(57);
myLL5.push(58);
myLL5.push(59);
console.table(myLL5);
console.table(myLL5.get(1));

const myLL6 = new LinkedList(25);
myLL6.push(26);
myLL6.push(27);
myLL6.push(28);
console.table(myLL6.get(2));
myLL6.set(2, 0)
console.table(myLL6.get(2));

const myLL7 = new LinkedList(35);
myLL7.push(36);
myLL7.push(37);
myLL7.push(38);
console.table(myLL7);
myLL7.insert(2, 0)
console.table(myLL7);
console.log(myLL7);

const myLL8 = new LinkedList(10);
myLL8.push(20);
myLL8.push(30);
console.table(myLL8);
removed = myLL8.remove(2);
console.table(removed);

const myLL9 = new LinkedList(100);
myLL9.push(200);
myLL9.push(300);
console.table(myLL9);
removed = myLL9.reverse();
console.table(myLL9);
