const Sorts = require('./HW08-ArraySorter.js');

function sortRGB(A){
    let sort=new Sorts.ArraySorter();
    sort.PQSort(A)
}
let A= ["Red","Blue","Green","Red","Red","Blue","Green","Blue"]
  sortRGB(A)
  console.log(A)

