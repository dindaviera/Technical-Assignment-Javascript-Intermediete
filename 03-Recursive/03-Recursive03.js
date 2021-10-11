const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, number) {
    if (arr.indexOf(number) === -1) {
        console.log('Angka tidak ditemukan')
    } else {
        console.log("Angka ditemukan pada index: " + arr.indexOf(number))
    }
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);
