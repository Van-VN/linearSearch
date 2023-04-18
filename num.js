function findMissing(arr) {
    var outputResult = [];
    for (var i = 0; i < 10; i++) {
        if (i !== arr[i]) {
            outputResult.push(i);
            console.log(i);
        }
    }
    return outputResult;
}
var testArray = [1, 2, 5, 6, 7, 10];
console.log(findMissing(testArray));
