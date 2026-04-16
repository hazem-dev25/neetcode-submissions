class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    get(index) {
        if (index < 0 || index >= this.length) return -1;

        let curr = this.head;
        let i = 0;

        while (i < index) {
            curr = curr.next;
            i++;
        }

        return curr.val;
    }

    insertHead(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
    }

    insertTail(val) {
        const newNode = new Node(val);

        if (!this.tail) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;

        // remove head
        if (index === 0) {
            this.head = this.head.next;

            if (this.length === 1) {
                this.tail = null;
            }

            this.length--;
            return true;
        }

        let prev = this.head;
        let i = 0;

        while (i < index - 1) {
            prev = prev.next;
            i++;
        }

        const nodeToDelete = prev.next;
        prev.next = nodeToDelete.next;

        // لو بنمسح التيل
        if (nodeToDelete === this.tail) {
            this.tail = prev;
        }

        this.length--;
        return true;
    }

    getValues() {
        let result = [];
        let curr = this.head;

        while (curr) {
            result.push(curr.val);
            curr = curr.next;
        }

        return result;
    }
}