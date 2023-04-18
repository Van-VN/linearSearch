function findMissing(arr: number[]) {
  let outputResult = [];
  for (let i = 0; i < arr[arr.length - 1]; i++) {
    if (i !== arr[i]) {
      outputResult.push(i);
    }
  }
  return outputResult;
}
