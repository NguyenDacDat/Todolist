const companies = ["Facebook", "ZALO", "MESSAGE", "Amazon", "Google"];
function checkCompanies(arr) {
  let result = [];
  let arrayLength = arr.length;
  for (let i = 0; i < arrayLength; i++) {
    if (arr[i].toLowerCase().indexOf("o") !== -1) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(checkCompanies(companies));
