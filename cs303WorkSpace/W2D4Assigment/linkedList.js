function ListNode(value,next){
    this.value=value,
    this.next=next
}
function findListNode(node,target){
    if(node.next===null)
          return null
    else if(node.value===target)
       return node
   
   return findListNode(node.next,target)   
}
   
   //Abe, Homer, Bart, Lisa, Maggie instead of a tree.
    const maggie = new ListNode('Maggie',null);
    const lisa = new ListNode('Lisa',maggie);
    const bart = new ListNode('Bart',lisa);
    const homer = new ListNode('Homer',bart); 
    const abe = new ListNode('Abe',homer);
    const head=new ListNode("head",abe)
    console.log("print all the lists homer ")
    console.log(findListNode(head,"Homer"))