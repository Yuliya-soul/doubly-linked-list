const Node = require('./node');

class LinkedList {
    constructor() {
      this._head = null;
      this._tail = null;
      this.length = 0;
    }
    
    append(data) {
      let node = new Node();
      node.data = data;
      if (this.length == 0) {
          this._head = node;
      } else {
          this._tail.next = node;
          node.prev = this._tail;
      }
      this._tail = node;
      this.length++;

      return this;

    }

    head() {
      if(this._head){
        return this._head.data
      } 
      else {
        return null;
      }
    }

    tail() {
      if(this._tail){
        return this._tail.data
      } 
      else {
        return null;
      }
    }

    at(index) {
      let current = this._head;
      let counter = 0;
      while( current ) {
        if( counter == index ) {
       return current.data;
        }
        current = current.next
        counter++
      }
      var b=-1;
      return b;
     }

    

    insertAt(index, data) {
    
        let current = this._head;
        let counter = 1;
        let node = new Node( data);
        if( index == 0 ) {
          this._head.prev = node
          node.next = this._head
          this._head = node
        } else {
          while(current) {
           current = current.next;
           if( counter == index ) {
             node.prev = current.prev
             current.prev.next = node
             node.next = current
             current.prev = node
           }
           counter++
         }
       }
     
       
    }

    isEmpty() {
            let current = this._head;
            let counter = 0;
            while( current !== null ) {
             counter++
             current = current.next
            }
            if (counter!=0) {
                var result=false;
            }
            else result =true;
            return result;
             }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;
      return this;

          }
    deleteAt(index) {
       let current = this._head;
        let counter = 1;
        if( index == 0 ) {
         this._head = this._head.next;
         this._head.prev = null;
        } 
        else {
         while( current ) {
          current = current.next
          if ( current == this._tail ) {
           this._tail = this._tail.prev;
           this._tail.next = null;
          } else if( counter == index ) {
            current.prev.next = current.next;
           current.next.prev = current.prev;
           break;
          }
          counter++;
         }
        }
 
        }

    reverse() {
      let current = this._head;
      let prev = null;
      while( current ){
        let next = current.next;
        current.next = prev;
        current.prev = next;
        prev = current;
        current = next;
      }
      this._tail = this._head;
      this._head = prev;
       
    }

    indexOf(data) {
            let current = this._head;
            let counter = 0;
            while( current ) {
              if( current.data == data ) {
               return counter
              }
              current = current.next
              counter++
            }
            var b=-1;
            return b;
           }
}



module.exports = LinkedList;

