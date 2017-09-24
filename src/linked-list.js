const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        var NewNode = new Node(data);
        if (this.length === 0 ){
            this._tail = NewNode;
            this._head = NewNode;
        }
        else {
            this._tail.next = NewNode;
            NewNode.prev = this._tail;
            this._tail = NewNode;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head) return this._head.data;
        else return null;
    }

    tail() {
        if (this._tail) 
            return this._tail.data;
        else return null;
    }

    nodeAt(index){
        if (index > -1 && index < this.length){
            var CurrentNode = this._head;
            var i = 0;
            while (i < index){
                CurrentNode = CurrentNode.next;
                i++;
            }
            return CurrentNode;
        }
        else{
            return null;
        }
    }

    at(index) {
        return this.nodeAt(index).data;
    }

    insertAt(position, data) {
        var newNode = new Node(data);
        var current = this.nodeAt(position);

        if (current !== null) {
            current.prev.next = newNode;
            newNode.prev = current.prev;
            current.prev = newNode;
            newNode.next = current;
            this.length++;
        } else if (this.length == 0 && position == 0){
            this.append(data);
        }

        return this;           
    }

    isEmpty() {
        var x = true;
        if (this.length === 0){ x = true;}
        if (this.length != 0){ x = false;}
        return x;
    }

    clear() {
        for (var ind = this.length - 1; ind >= 0; ind--){
            this.deleteAt(ind);
        }
        return this;
    }

    deleteAt(index) {
        var current = this.nodeAt(index);
        if (current !== null) {
            
            if (current.prev) current.prev.next = current.next;
            if (current.next) current.next.prev = current.prev;

            if (current == this._head) {
                this._head = current.next;
            }
            if (current == this._tail) {
                this._tail = current.prev;
            }
            this.length--;
        }
        
        return this;                  
  }

    reverse() {
        var tempor = this._head;
        this._head = this._tail;
        this._tail = tempor;
        var pointHead = this._head;
        while (pointHead!=null){
            tempor = pointHead.next;
            pointHead.next = pointHead.prev;
            pointHead.prev = tempor;
            pointHead = pointHead.next;
        }
        return this;
    }

    indexOf(data) {
        var temp = this._head;
        for (var i = 0; temp && temp.data != data; i++) {
            temp = temp.next;
        }

        if (i == this.length){
            return -1;
        }
        
       return i;
    }
}

module.exports = LinkedList;
