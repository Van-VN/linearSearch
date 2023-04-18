function findMissing(arr: number[]) {
  let outputResult: number[] = [];
  for (let i = 1; i < arr[arr.length - 1]; i++) {
    if (arr.indexOf(i) === -1) {
      outputResult.push(i);
    }
  }
  return outputResult;
}

let testArray = [1, 2, 5, 6, 7, 10];

console.log(findMissing(testArray));
