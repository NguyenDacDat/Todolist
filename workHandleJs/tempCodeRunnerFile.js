let array = [1, 2, 3, 4, 5, 6];
function reverseArray(arr) {
  let result = [];
  arr.forEach((str) => {
    if (str % 2 == 0) {
      result.push(str);
    }
  });
  return result.reverse();
}
console.log(reverseArray(array));