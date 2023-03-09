const numbers = [1, 2, 3, 4, 5, 6];
function checkEven(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(checkEven([numbers]));
