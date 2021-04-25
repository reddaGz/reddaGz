const List = require("./Sequence.js");
function removeDuplication(L) {
  for (let i = 0; i < L.size(); i++) { 
    let cur = L.elemAtRank(i);
    for (let j = i + 1; j < L.size(); j++) { 
      if (cur === L.elemAtRank(j)) {
        L.removeAtRank(j);
        j--;
      }
    }
  }
  return L;
}
let seq = new List.Sequence();
seq.insertFirst(3);
seq.insertFirst(6);
seq.insertFirst(3);
seq.insertFirst(11);
seq.insertFirst(89);
seq.insertFirst(11);
seq.insertFirst(11);
seq.insertFirst(11);
console.log("Before remove duplications");
console.log(seq.toString());
console.log("After remove duplications");
let uniq = removeDuplication(seq);
console.log(uniq.toString());
