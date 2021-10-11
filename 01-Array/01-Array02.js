const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(input) {
    const averageArr = input.reduce((a, b) => a + b) / input.length;
    let jawaban = 0;
    input.forEach(i => {
        if(i > averageArr)
            jawaban++;
    });
    return jawaban;
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))

