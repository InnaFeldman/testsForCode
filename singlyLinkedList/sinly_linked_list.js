const singly_list = ()=>{
    function Node(val){
      this.val = val;
      this.next = null;
    }

  Node.prototype.add = function(val){
      let current = this;

     while(current){
         if(current.val > val){
            let tmp = current.val; 
            let tmp_next = current.next;
            current.val = val; 
            current.next = new Node(tmp);
            current.next.next = tmp_next;
             break;
                
        }else {
            if(current.next===null){
               current.next = new Node(val);
               break;
            }
            current = current.next;
        }
     }
  }

Node.prototype.search = function(val) {
    let current = this;
      while(current) {
        if(current.val === val){
            // return current.val;
            console.log('Searched element: ' + current.val);
        }
        current = current.next;
      }
      return null;
      }
    
      Node.prototype.remove = function(val){
         let current = this;
           while(current) {
             if(current.val === val) {
               current.val = current.next.val;
               current.next = current.next.next;
               break;
             }
              current = current.next;
           }
      }

  let list  = new Node(1);
  list.add(2);
  list.add(3);
  list.add(5);
  list.add(4);
}

module.exports = singly_list;