function setOfSubsets(n) {
  let set = [];
  let subSet = [];
  subSetHelper(n, set, subSet, 1);
  return set;
}
function subSetHelper(n, set, subSet, start) {
  set.push(subSet);
  console.log(subSet)
  for (let i = start; i <= n; i++) {
    subSet.push(i);
    subSetHelper(n, set, subSet, start+=1);
    subSet.pop();
  }
}
let num = [1, 2];
let setValue = setOfSubsets(3);
console.log(setValue);
