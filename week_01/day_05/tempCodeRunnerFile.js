function countAndSum(arr) {

    var newArray = [0, 0];
    if (arr == null || arr.length == 0) {
        newArray = [];
    }
    for (var i in arr) {
        if (arr[i] > 0) {
            newArray[0] += 1;
        } else {
            newArray[1] += arr[i];
        }
    }
    return newArray;
}
const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countAndSum(someArray));