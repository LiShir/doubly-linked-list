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
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        if (index > -1 && index < this.length){
            var CurrentNode = this._head,
            i = 0;
            while (i++ < index){
                CurrentNode = CurrentNode.next;
            }
            return CurrentNode.data;
        }
        else{
            return null;
        }
    }

    insertAt(position, data) {
      
       
           
            

    }

    isEmpty() {
        var x = new Boolean(true);
        if (this.length === 0){ x = true;}
        if (this.length != 0){ x = false;}
        return x;
    }

    clear() {}

    deleteAt(index) {
        
        if (index > -1 && index < this.length){
            
             var current = this._head,
             i = 0;
                       
             while(i++ < index){
                 current = current.next;
            }
            
            //skip over the item to remove
             current.prev.next = current.next;
        }
        this.length--;
        return current.data;                  
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
        
    }

    indexOf(data) {
       
    }
}

module.exports = LinkedList;
