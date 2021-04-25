const List = require('./Sequence.js');
function sortRB(L){
    for(let i=0;i<L.size();i++){
        let cur=L.elemAtRank(i) 
            if(cur==="Blue"){
               L.removeAtRank(i)
               L.insertAtRank(L.size(),cur)
               console.log(1)
            }                    
    }
}
/**
 *      Algorthim sortRB(L)
 *      
 *       nextRed:=L.first
 *      while !L.isLast(nextRed) && nextRed.element()===Red do
 *          nextRed:=L.after(nextRed)
 *       p:=L.first()
 *      while !L.isLAst(p) do
 *           if p.element()=Red then 
 *               L.swapElement(p,nextRed)
 *               nextRed:=L.after(nextRed)
 *          p:=L.after(p)
 *        
 */

//function sortRB(L){
    // let p=L.first()
    // let elem=p.element();
    // while(!L.isLast(p) && L.after(p)){
    //     if(elem==="Blue"){ 
    //         L.remove(p)
    //         L.insertLast(elem)
    //     }
    //     p=L.after(p)
    //     elem=p.element(); 
    // }
    // return L;
    
//}

let color=new List.Sequence()
color.insertFirst("Red")
//color.insertFirst("Red")
color.insertFirst("Blue")
color.insertFirst("Red")
color.insertFirst("Red")
color.insertFirst("Blue")
//color.insertLast("Blue")
// color.insertFirst("Red")
// color.insertFirst("Red")
console.log(color.toString())
sortRB(color)
console.log(color.toString())

