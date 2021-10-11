//Soal-01-array
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) {
  let panjangArr = arr.length - 1;
  let newArr = [];
  for (i = panjangArr; i >= 0; i--){
    newArr.push(arr[i]);
  }
  return newArr;

  let panjangArr2 = arr2.length - 1;
  let newArr2 =  [];
  for (i = panjangArr2; i >=0; i--){
    newArr.push(arr2[i]);
  }
  return newArr2;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);



 