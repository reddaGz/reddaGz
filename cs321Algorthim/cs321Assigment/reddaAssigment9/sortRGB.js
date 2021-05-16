const Sorts = require('./HW09-ArraySorter.js');

function sortRGB(A){
    let sort=new Sorts.ArraySorter();
    sort.PQColorSort(A)
}
let A= ["Red","Blue","Green","Red","Red","Blue","Green","Blue"]
  sortRGB(A)
  console.log(A)

